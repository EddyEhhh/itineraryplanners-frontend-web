import React, {useState, Suspense} from "react";
import styles from "./RegisterModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import LogInModal from "../LogInModal/LogInModal";
import {useTranslation} from "react-i18next";

function RegisterModal(props) {
  const [t, i18n] = useTranslation("landing");
  return (
      <Suspense>

    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 bg-contain backdrop-blur-sm flex flex-col justify-center items-center">
        <div id="register-modal" className="w-[400px] h-[800px] md:w-[650px] md:h-[850px]">
          <div>
            <div className="corner-element">
              <MediumCircleButton onButtonClick = {props.onClose} />
            </div>
            <div id="register-modal-container" >
              <h1 id="register-header">
                {t('SignUpModal.Title')}
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
                    title={t('SignUpModal.FirstName')}
                    placeholder={t('SignUpModal.FirstName')}
                    type="text"
                    warning="Please enter your email address"
                  ></InputBox>
                  <InputBox
                    title={t('SignUpModal.LastName')}
                    placeholder={t('SignUpModal.LastName')}
                    type="text"
                    warning="Please enter your email address"
                  ></InputBox>
                  <InputBox
                      title= {t('email')}
                      placeholder={t('email')}
                      type="email"
                      warning="Please enter your email address"
                  ></InputBox>
                  <InputBox
                      title= {t('password')}
                      placeholder= {t('password')}
                      type="password"
                      warning="Please enter your email address"
                  ></InputBox>
                </div>

                <div className="flex justify-center">
                  <XLargeButton
                    id="join-button"
                    text={t('SignUpModal.Join')}
                    textColour="white"
                    colour="bg-primary-green"
                    hover=""
                    disabled=""
                    border=""
                  ></XLargeButton>
                </div>
              </div>
              <div id="join-us">
                <p>{t('SignUpModal.Description')}&nbsp;</p>
                <button onClick={props.openPopup}>{t('logIn')}</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Suspense>

  );
}

export default RegisterModal;
