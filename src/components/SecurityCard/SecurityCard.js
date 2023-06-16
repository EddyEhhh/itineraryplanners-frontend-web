import styles from "./SecurityCard.scss";
import React from "react";

function SecurityCard() {
  return (
    <div id="security-card">
      <div>
        <div id="security-card-heading">
          <h1>Login</h1>
        </div>
        <div id="password-container">
          <div id="password-info">
            <h2><b>Password</b></h2>
            <p>Updated a day ago</p>
          </div>
          <button><b>Update</b></button>
        </div>
        <div id="security-card-heading">
          <h1>Social accounts</h1>
        </div>
        <div id="password-container">
          <div id="password-info">
            <h2><b>Google</b></h2>
            <p>Not connected</p>
          </div>
          <button><b>Connect</b></button>
        </div>
        <div id="security-card-heading">
          <h1>Account</h1>
        </div>
        <div id="password-container">
          <div id="password-info">
            <h2>Deactivate your account</h2>
          </div>
          <button className="text-danger-red"
          ><b>Deactivate</b></button>
        </div>
      </div>
    </div>
  );
}

export default SecurityCard;
