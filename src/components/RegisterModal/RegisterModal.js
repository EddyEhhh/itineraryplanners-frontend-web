import React, {useState, Suspense} from "react";
import styles from "./RegisterModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import LogInModal from "../LogInModal/LogInModal";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../contexts/AuthContext";
import { register } from "../../services/AuthenticationService"
import {useNavigate} from "react-router-dom";

function RegisterModal(props) {
  const [t, i18n] = useTranslation("landing");

  const navigate = useNavigate();

  const [registerForm, setRegisterForm] =
      useState({
        username: "",
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

  const [registerFormValidationError, setRegisterFormValidationError] =
      useState({
        usernameErrorMessage: "",
        displayNameErrorMessage: "",
        emailErrorMessage: "",
        passwordErrorMessage: "",
        confirmPasswordErrorMessage: ""
      });


  const updateRegisterFormValidationError = (key, value) => {
      setRegisterFormValidationError(prev => ({
          ...prev,
          [key] : value
      }));
  }

    const updateRegisterFormError = (key, value) => {
        setRegisterFormError(prev => ({
            ...prev,
            [key] : value
        }));
    }

  const [registerFormError, setRegisterFormError] =
      useState({
        errorMessage: "",
      });

  const [isSubmit, setIsSubmit] = useState(false);

  const { login } = useAuth();

  const checkConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  }

  const registerFormValidation = () => {
      console.log("Function run");
      let valid = true;
      console.log(registerForm.password + "   " + registerForm.confirmPassword)
      if(registerForm.password !== registerForm.confirmPassword) {
          console.log("If run");
          updateRegisterFormValidationError("confirmPasswordErrorMessage", "authenticate.error.validation.confirm_password.not_match");
          valid = false;
      }else{
          updateRegisterFormValidationError("confirmPasswordErrorMessage", "");
      }

      return valid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    console.log("Test: ", registerFormValidationError.usernameErrorMessage);
    if(registerFormValidation()){
      console.log("PRINT: " + registerForm);

      register(registerForm).then(res => {
        // console.log("Successfully register in");
        // console.log("RES" + res.headers);

          login(registerForm).then(res => {
            navigate("/home");
          }).catch(err =>{
            // console.log("ERR" + err.code);
            // console.log(err.code);
          })


      }).catch(err =>{

          updateRegisterFormValidationError('usernameErrorMessage' ,err.response.data.usernameErrorMessage);
          updateRegisterFormValidationError('emailErrorMessage' ,err.response.data.emailErrorMessage);
          updateRegisterFormValidationError('displayNameErrorMessage' ,err.response.data.displayNameErrorMessage);
          updateRegisterFormValidationError('passwordErrorMessage' ,err.response.data.passwordErrorMessage);
          // updateRegisterFormError('errorMessage', err.response.data.errorMessage);


      }).finally(() => {
        setIsSubmit(false);
      })
    }else{
      console.log("Failed to register")
    }

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log("PRINT" + registerForm);
  }


  return (
      <Suspense>

    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 bg-contain backdrop-blur-sm flex flex-col justify-center items-center">
        <div id="register-modal" className="w-[400px] h-[800px] md:w-[650px] md:h-[850px]">
          <div>
            <div className="corner-element">
              <MediumCircleButton onButtonClick = {props.onClose} />
            </div>
            <div id="register-modal-container" >
              <h1 id="register-header">
                {t('SignUpModal.Title')}
              </h1>
              {/*<XLargeButton*/}
              {/*  text="Sign up with Google"*/}
              {/*  colour="bg-[#4285F4]"*/}
              {/*/>*/}
              {/*<p id="divider">*/}
              {/*  <span>or</span>*/}
              {/*</p>*/}
              <form onSubmit={handleSubmit} type="post">
                <div className=" flex flex-col items-center ">
                  <div id="name-fields" className="flex justify-center">
                    <InputBox
                      title={t('SignUpModal.Username')}
                      placeholder={t('SignUpModal.Username')}
                      type="text"
                      warning={t(registerFormValidationError.usernameErrorMessage)}
                      name="username"
                      onChange={handleInputChange}
                    ></InputBox>
                    <InputBox
                      title={t('SignUpModal.Email')}
                      placeholder={t('SignUpModal.Email')}
                      type="email"
                      warning={t(registerFormValidationError.emailErrorMessage)}
                      name="email"
                      onChange={handleInputChange}
                    ></InputBox>
                    <InputBox
                        title= {t('SignUpModal.DisplayName')}
                        placeholder={t('SignUpModal.DisplayName')}
                        type="text"
                        warning={t(registerFormValidationError.displayNameErrorMessage)}
                        name="displayName"
                        onChange={handleInputChange}
                    ></InputBox>
                    <InputBox
                        title= {t('SignUpModal.Password')}
                        placeholder={t('SignUpModal.Password')}
                        type="password"
                        warning={t(registerFormValidationError.passwordErrorMessage)}
                        name="password"
                        onChange={handleInputChange}
                    ></InputBox>
                    <InputBox
                        title= {t('SignUpModal.ConfirmPassword')}
                        placeholder={t('SignUpModal.ConfirmPassword')}
                        type="password"
                        warning={t(registerFormValidationError.confirmPasswordErrorMessage)}
                        name="confirmPassword"
                        onChange={handleInputChange}
                    ></InputBox>
                  </div>

                  <div className="flex justify-center">
                    <XLargeButton
                      id="join-button"
                      text={t('SignUpModal.Join')}
                      textColour="white"
                      colour="bg-primary-green"
                      hover=""
                      disabled=""
                      border=""
                    ></XLargeButton>
                  </div>
                </div>
              </form>
              <div id="join-us">
                <p>{t('SignUpModal.Description')}&nbsp;</p>
                <button onClick={props.openPopup}>{t('logIn')}</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Suspense>

  );
}

export default RegisterModal;
