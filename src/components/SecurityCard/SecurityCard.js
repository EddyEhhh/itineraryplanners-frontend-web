import styles from "./SecurityCard.scss";
import React from "react";

function SecurityCard() {
  return (
    <div id="security-card">
      <h1>Login</h1>
      <div className="content">
        <div className="info">
          <h2>Password</h2>
          <p>Last updated a day ago</p>
        </div>
        <button>Update</button>
      </div>
    </div>
  );
}

export default SecurityCard;
