import React, {Suspense, useState} from "react";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import styles from "./LogInModal.scss";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

function LogInModal(props) {
  const [t, i18n] = useTranslation('landing');

  const [loginForm, setLoginForm] = useState({username: "", password: ""})
  const [isSubmit, setIsSubmit] = useState(false);



  const navigate = useNavigate();

  const { login } = useAuth();
  // const login = () =>{
  //   console.log("TEEE");
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log("Values: ", loginForm);
    login(loginForm)
        .then(res => {
          navigate("/home")
          console.log("Successfully logged in")
        }).catch(err => {
      console.log(err.code);
    }).finally(() => {
      setIsSubmit(false);
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
      <Suspense>
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-0 ">
            <div id="log-in-modal" className="w-[400px] h-[600px] md:w-[524px] md:h-[650px]">
              <div className="corner-element">
                <MediumCircleButton onButtonClick = {props.onClose}/>
              </div>
              <form onSubmit={handleSubmit} type="post">
                <div id="login-modal-container">
                  <div className="space-y-10">
                    <h1 id="welcome-header">
                      {t('LogInModal.Title')}
                    </h1>

                    <XLargeButton
                        text={t("googleLogin")}
                        colour="bg-[#4285F4]"
                        disabled=""
                        type="button"
                    />
                  </div>
                  <p id="divider">
                    <span>or</span>
                  </p>
                  <InputBox
                      placeholder={t("email")}
                      width="w-[382.35px]"
                      warning="Please enter your email address"
                      name="username"
                      onChange={handleInputChange}
                  ></InputBox>
                  <InputBox
                      placeholder={t("password")}
                      type={t("password")}
                      width="w-[382.35px]"
                      warning="Please enter your password"
                      name="password"
                      onChange={handleInputChange}
                  ></InputBox>
                  <MediumButton
                      text="Forgot Password?"
                      textColour="black"
                      type="button"
                      hover="false"
                      disabled=""
                      border=""
                  ></MediumButton>
                  <XLargeButton
                      text={t("logIn")}
                      colour="bg-primary-green"
                      hover=""
                      type="submit"
                      disabled={isSubmit}
                  ></XLargeButton>
                  <div id="join-us">
                    <p>Not a member?&nbsp;</p>
                    <button type="button" onClick={props.openPopup}>{t('SignUpModal.Join')}</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </Suspense>
  );
}

export default LogInModal;