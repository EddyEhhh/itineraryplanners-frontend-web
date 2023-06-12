import React from "react";
import styles from "./RegisterModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";

function RegisterModal(props) {
  if (!props.visible) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div id="register-modal">
          <div>
            <div className="corner-element">
              <MediumCircleButton onButtonClick = {props.onClose} />
            </div>
            <div id="register-modal-container">
              <h1 id="register-header">
                Join us to make the most <br></br> out of your planning.
              </h1>
              <XLargeButton
                text="Sign up with Google"
                textColour="black"
                hover="false"
                disabled=""
                border="[#D3DBE6]"
              />
              <p id="divider">
                <span>or</span>
              </p>
              <div className="space-y-5">
                <div id="name-fields" className="space-x-5">
                  <InputBox
                    title="First Name"
                    placeholder="First Name"
                    type="text"
                    width="w-[181px]"
                  ></InputBox>
                  <InputBox
                    title="Last Name"
                    placeholder="Last Name"
                    type="text"
                    width="w-[181px]"
                  ></InputBox>
                </div>
                <div>
                  <InputBox
                    title="Email Address"
                    placeholder="Email"
                    type="email"
                    width="w-[382.35px]"
                    warning="Please enter your email address"
                  ></InputBox>
                  <InputBox
                    title="Create a password"
                    placeholder="Password"
                    type="password"
                    width="w-[382.35px]"
                    warning="Please enter your password"
                  ></InputBox>
                </div>
                <div className="flex justify-center">
                  <XLargeButton
                    id="join-button"
                    text="Join"
                    textColour="white"
                    colour="primary-green"
                    hover=""
                    disabled=""
                    border=""
                  ></XLargeButton>
                </div>
              </div>
              <div id="join-us">
                <p>Already a member?&nbsp;</p>
                <button>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
