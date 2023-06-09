import React from "react";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import styles from "./LogInModal.scss";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";

function LogInModal() {
  return (
    <div>
      <button data-modal-toggle="log-in-modal" data-modal-show="log-in-modal">
        Log In Modal (WIP)
      </button>

      <div id="log-in-modal" className="hidden relative container">
        <div>
          <div className="corner-element">
            <MediumCircleButton dataModalHide="log-in-modal" />
          </div>
          <div id="modal-container" className="container">
            <h1 className="font-inter">Welcome</h1>
            <XLargeButton
              text="Log in with Google"
              textColour="black"
              borderColour="background-gray"
              hover=""
              colour="white"
              disabled=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
