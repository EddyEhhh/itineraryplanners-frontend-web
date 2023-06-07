import React from "react";
import styles from "./PasswordResetModal.scss";
import SmallCircleButton from "../CircleButton/SmallCircleButton/SmallCircleButton";
import InputBox from "../InputBox";
//
// <button
//     data-modal-target="reset-password-modal"
//     data-modal-toggle="reset-password-modal"
//     className="bg-primary-green py-2 px-4 rounded-full"
// >
//     Toggle Reset Password Modal
// </button>
function PasswordResetModal(props) {
  return (
    <div>
        <button
            data-modal-target="reset-password-modal"
            data-modal-toggle="reset-password-modal"
            className="bg-primary-green py-2 px-4 rounded-full"
        >
            {props.text}
        </button>



      <div id="reset-password-modal" className="hidden relative container">
        <div className="corner-element">
          <SmallCircleButton dataModalHide="reset-password-modal" />
        </div>
        <div className="space-y-10">
          <h1 className="font-inter">Password reset</h1>
          <div className="top-[103px]">
            <InputBox
              width="w-[382px]"
              placeholder="Email"
              type="email"
              warning="Please enter a valid email address"
            />
          </div>
          <div>
            <button id="reset-password-button">Reset password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetModal;
