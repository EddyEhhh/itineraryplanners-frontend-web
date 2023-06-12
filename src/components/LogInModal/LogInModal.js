import React from "react";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import styles from "./LogInModal.scss";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";

function LogInModal(props) {
  if (!props.visible) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div id="log-in-modal">
          <div className="corner-element">
            <MediumCircleButton onButtonClick = {props.onClose}/>
          </div>
          <div id="login-modal-container">
            <div className="space-y-10">
              <h1 id="welcome-header">
                Welcome
              </h1>
              <XLargeButton
                text="Log in with Google"
                textColour="black"
                hover="false"
                disabled=""
                border="[#D3DBE6]"
              />
            </div>
            <p id="divider">
              <span>or</span>
            </p>
            <InputBox
              placeholder="Email"
              type="email"
              width="w-[382.35px]"
              warning="Please enter your email address"
            ></InputBox>
            <InputBox
              placeholder="Password"
              type="password"
              width="w-[382.35px]"
              warning="Please enter your password"
            ></InputBox>
            <MediumButton
              text="Forgot Password?"
              textColour="black"
              hover="false"
              disabled=""
              border=""
            ></MediumButton>
            <XLargeButton
              text="Log in"
              textColour="white"
              colour="primary-green"
              hover=""
              disabled=""
              border=""
            ></XLargeButton>
            <div id="join-us">
              <p>Not a member?&nbsp;</p>
              <button>Join us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;