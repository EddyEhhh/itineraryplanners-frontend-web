import React from "react";
import styles from "./PasswordReset.scss";
import SmallCircleButton from "../CircleButton/SmallCircleButton/SmallCircleButton";
import InputBox from "../InputBox";

function PasswordReset() {
  return (
    <div>
      <button
        data-modal-target="reset-password-modal"
        data-modal-toggle="reset-password-modal"
        className="bg-primary-green py-2 px-4 rounded-full"
      >
        Toggle Reset Password Modal
      </button>

      <div id="reset-password-modal" className="hidden relative container">
        <div>
          <SmallCircleButton 
          className='right-0 top-0 absolute'
          dataModalHide="reset-password-modal"></SmallCircleButton>
        </div>
        <div>
          <InputBox placeholder="Email"></InputBox>
          <button
          id='reset-password-button'
          >Reset password</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
