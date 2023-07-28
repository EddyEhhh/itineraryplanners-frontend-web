import styles from "./SecurityCard.scss";
import React, {useEffect} from "react";
import { useState } from "react";
import InputBox from "../InputBox";
import LargeButton from "../RectangleButton/LargeButton/LargeButton"
import AlertMessage from "../AlertMessageModal/AlertMessage";
import {saveNewPassword} from "../../services/AccountService";
import DeactivateAccount from "../DeactivateAccountModal/DeactivateAccount";


function SecurityCard(props) {
  const [updatePassword, setUpdatePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [successfullySaved, setSuccessfullySaved] = useState(false);
  const [errorSaving, setErrorSaving] = useState(false);
  const [showDeactivateAccountModal, setShowDeactivateAccountModal] = useState(false);

  useEffect(() => {
    if(showAlertMessage) {
      const timeId = setTimeout(() => {
        setShowAlertMessage(false)
      }, 3000)
      return () => {
        clearTimeout(timeId);
      }
    }
    if(successfullySaved) {
      const timeId = setTimeout(() => {
        setSuccessfullySaved(false)
      }, 3000)
      return () => {
        clearTimeout(timeId);
      }
    }
    if(errorSaving) {
      const timeId = setTimeout(() => {
        setErrorSaving(false)
      }, 3000)
      return () => {
        clearTimeout(timeId);
      }
    }
  });
  const savePassword = () => {
    let data = {
      oldPassword: currentPassword,
      newPassword: newPassword
    }
    saveNewPassword(props.data.username, data).then(res => {
      console.log(res.data);
      if(res.data){
        setSuccessfullySaved(true);
      } else {
        setErrorSaving(true);
      }
      setShowAlertMessage(true);
    }
    );
  };

  const updatePasswordHandler = () => {
    setUpdatePassword(!updatePassword);
  };

  const changePasswordHandler = () => {

    if(!(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8,}$/.test(newPassword))){
      document.getElementById("invalid-password").style.display='block';
    } else if (reEnterPassword !== newPassword){
      document.getElementById("non-matching-password").style.display='block';
    } else {
      savePassword();
      setUpdatePassword(!updatePassword);
    }
  }

  const currentPasswordHandler = (event) => {
    setCurrentPassword(event.target.value);
  }

  const newPasswordHandler = (event) => {
   //  console.log(event.target.value);
    setNewPassword(event.target.value);
    if(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8,}$/.test(event.target.value)){
      document.getElementById("invalid-password").style.display='none';
    }
  }

  const reEnterPasswordHandler = (event) => {
    // console.log(event.target.value);
    setReEnterPassword(event.target.value);
  }

  const deactivateAccountModalHandler = () =>{
    setShowDeactivateAccountModal(!showDeactivateAccountModal);
  }

  return (
    <div id="security-card">

      <div>
        <div id="security-card-heading">
          <h1>Login</h1>
        </div>
        <div id="password-container">
          <div id="password-info">
            { !updatePassword &&       
            <div>
              <h2>
                <b>Password</b>
              </h2>
              <p>Updated a day ago</p>
            </div>}
            { updatePassword &&
            <div className="space-y-5">
              <InputBox title="Current password" type="password" placeholder="Current password" width="w-[350px]" onChange={currentPasswordHandler}/>
              <InputBox title="New password" type="password" placeholder="New password" width="w-[350px]" onChange={newPasswordHandler}/>
              <div id="invalid-password"><p>Please enter a password of at least length 8 containing at least 1 uppercase letter, 1 special character, 2 digits and 2 lowercase letters. </p></div>
              <InputBox title="Confirm password" type="password" placeholder="Re-enter new password" width="w-[350px]" onChange={reEnterPasswordHandler}/>
              <div id="non-matching-password"><p>The password confirmation does not match.</p></div>
              <LargeButton text="Update password" colour="bg-primary-green" handleClick={changePasswordHandler}/>
            </div>
            }
          </div>
          { !updatePassword &&
              <button onClick={updatePasswordHandler}>
                <b>Update</b>
             </button>
          }
          { updatePassword &&
              <button onClick={updatePasswordHandler}>
                <b>Cancel</b>
              </button>
          }
        </div>
        <div id="security-card-heading">
          <h1>Social accounts</h1>
        </div>
        <div id="alert-message">
          {setShowAlertMessage && successfullySaved && <AlertMessage status='success' message='Password Updated!'/>}
          {setShowAlertMessage && errorSaving && <AlertMessage status='success' message='Error updating password.'/>}
        </div>
        <div id="password-container">
          <div id="password-info">
            <h2>
              <b>Google</b>
            </h2>
            <p>Not connected</p>
          </div>
          <button>
            <b>Connect</b>
          </button>
        </div>
        <div id="security-card-heading">
          <h1>Account</h1>
        </div>
        <div id="password-container">
          <div id="password-info">
            <h2>Deactivate your account</h2>
          </div>
          <button className="text-danger-red" onClick={deactivateAccountModalHandler}>
            <b>Deactivate</b>
          </button>

        </div>
        {showDeactivateAccountModal &&  <DeactivateAccount onClose={deactivateAccountModalHandler}/>}

      </div>
    </div>
  );
}

export default SecurityCard;
