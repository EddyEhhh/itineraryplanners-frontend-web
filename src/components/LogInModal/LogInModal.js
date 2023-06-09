import React from "react";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import styles from "./LogInModal.scss";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";

function LogInModal() {
  return (
    <div>
      <button data-modal-toggle="log-in-modal" data-modal-show="log-in-modal">
        Log In Modal
      </button>

      <div id="log-in-modal" className="hidden relative container">
        <div>
          <div className="corner-element">
            <MediumCircleButton dataModalHide="log-in-modal" />
          </div>
          <div id="modal-container" className="container">
            <div className="space-y-10">
            <h1 id="welcome-header" className="font-inter">Welcome</h1>
            <XLargeButton
              text="Log in with Google"
              textColour="black"
              hover=""
              colour="white"
              disabled=""
            /></div>
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
              hover=""
              colour="white"
              disabled=""
            ></MediumButton>
            <XLargeButton
              text="Log in"
              textColour="white"
              colour="primary-green"
              hover=""
              disabled=""
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
