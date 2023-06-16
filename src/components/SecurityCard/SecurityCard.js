import styles from "./SecurityCard.scss";
import React from "react";

function SecurityCard() {
  return (
    <div id="security-card">
      <h1 className="flex-1">Login</h1>
        <div id="content">
          <h2>Password</h2>
          <p>Last updated a day ago</p>
        </div>
        <button
        id="right-button"
        >Update</button>
    </div>
  );
}

export default SecurityCard;
