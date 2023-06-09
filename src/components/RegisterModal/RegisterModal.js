import React from "react";
import styles from "./RegisterModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";

function RegisterModal() {
  return (
    <div>
      <button
        data-modal-toggle="register-modal"
        data-modal-show="register-modal"
      >
        Register Modal
      </button>
      <div id="register-modal" className="hidden relative container">
        <div>
          <div className="corner-element">
            <MediumCircleButton dataModalHide="register-modal" />
          </div>
          <div id="modal-container" className="container">
            <div className="space-y-10">
              <h1 id="welcome-header" className="font-inter">
                Join us to make the most out of your planning.
              </h1>
              <XLargeButton
                text="Sign up with Google"
                textColour="black"
                hover="false"
                disabled=""
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

export default RegisterModal;
