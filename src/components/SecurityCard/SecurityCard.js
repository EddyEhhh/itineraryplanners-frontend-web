import styles from "./SecurityCard.scss";
import React from "react";
import { useState } from "react";
import InputBox from "../InputBox";
import LargeButton from "../RectangleButton/LargeButton/LargeButton"

function SecurityCard() {
  const [updatePassword, setUpdatePassword] = useState(false);
  const updatePasswordHandler = () => {
    setUpdatePassword(!updatePassword);
  };

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
              <InputBox title="Current password" type="password" placeholder="Current password" width="w-[350px]"/>
              <InputBox title="New password" type="password" placeholder="New password" width="w-[350px]"/>
              <InputBox title="Confirm password" type="password" placeholder="Re-enter new password" width="w-[350px]"/>
              <LargeButton text="Update password" colour="bg-primary-green" handleClick={updatePasswordHandler}/>
            </div>
            }
          </div>
          { !updatePassword && <button onClick={updatePasswordHandler}>
            <b>Update</b>
          </button>}
          { updatePassword && <button onClick={updatePasswordHandler}>
            <b>Cancel</b>
          </button>}
        </div>
        <div id="security-card-heading">
          <h1>Social accounts</h1>
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
          <button className="text-danger-red">
            <b>Deactivate</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecurityCard;
