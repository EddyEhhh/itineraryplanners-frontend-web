import React, {Suspense} from "react";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import styles from "./LogInModal.scss";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";
import {useTranslation} from "react-i18next";

function LogInModal(props) {
  const [t, i18n] = useTranslation('landing');
  return (
      <Suspense>
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-0 ">
        <div id="log-in-modal" className="w-[400px] h-[600px] md:w-[524px] md:h-[650px]">
          <div className="corner-element">
            <MediumCircleButton onButtonClick = {props.onClose}/>
          </div>
          <div id="login-modal-container">
            <div className="space-y-10">
              <h1 id="welcome-header">
                {t('LogInModal.Title')}
              </h1>
              <XLargeButton
                text="
                Log in with Google"
                colour="bg-[#4285F4]"
                disabled=""
              />
            </div>
            <p id="divider">
              <span>or</span>
            </p>
            <InputBox
              placeholder={t("email")}
              type= {t("email")}
              width="w-[382.35px]"
              warning="Please enter your email address"
            ></InputBox>
            <InputBox
              placeholder={t("password")}
              type={t("password")}
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
              text={t("logIn")}
              colour="bg-primary-green"
              hover=""
              disabled=""
            ></XLargeButton>
            <div id="join-us">
              <p>Not a member?&nbsp;</p>
              <button onClick={props.openPopup}>{t('SignUpModal.Join')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Suspense>
  );
}

export default LogInModal;