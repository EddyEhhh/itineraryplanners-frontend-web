import React, {useState} from "react";
import styles from "./RegisterModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import LogInModal from "../LogInModal/LogInModal";

function RegisterModal(props) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 bg-contain backdrop-blur-sm flex flex-col justify-center items-center">
        <div id="register-modal" className="w-[400px] h-[800px] md:w-[650px] md:h-[850px]">
          <div>
            <div className="corner-element">
              <MediumCircleButton onButtonClick = {props.onClose} />
            </div>
            <div id="register-modal-container" >
              <h1 id="register-header">
                Join us to make the most out of your planning.
              </h1>
              <XLargeButton
                text="Sign up with Google"
                colour="bg-[#4285F4]"
              />
              <p id="divider">
                <span>or</span>
              </p>
              <div className=" flex flex-col items-center ">
                <div id="name-fields" className="flex justify-center">
                  <InputBox
                    title="First Name"
                    placeholder="First Name"
                    type="text"
                    warning="Please enter your email address"
                  ></InputBox>
                  <InputBox
                    title="Last Name"
                    placeholder="Last Name"
                    type="text"
                    warning="Please enter your email address"
                  ></InputBox>
                  <InputBox
                      title="Email Address"
                      placeholder="Email"
                      type="email"
                      warning="Please enter your email address"
                  ></InputBox>
                  <InputBox
                      title="Password"
                      placeholder="Password"
                      type="password"
                      warning="Please enter your email address"
                  ></InputBox>
                </div>

                <div className="flex justify-center">
                  <XLargeButton
                    id="join-button"
                    text="Join"
                    textColour="white"
                    colour="bg-primary-green"
                    hover=""
                    disabled=""
                    border=""
                  ></XLargeButton>
                </div>
              </div>
              <div id="join-us">
                <p>Already a member?&nbsp;</p>
                <button onClick={props.openPopup}>Log in</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
