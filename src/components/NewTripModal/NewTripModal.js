import styles from "./NewTripModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import InputBoxWithIcon from "../InputBoxWithIcons/InputBoxWithIcon";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import { useEffect, useState } from "react";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";

function NewTripModal(props) {

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
          <div id="new-trip-modal">
            <div className="corner-element">
              <MediumCircleButton onButtonClick={props.onClose} />
            </div>
            <div id="new-trip-modal-container">
              <div className="space-y-5">
                <h1>New Trip</h1>
                <InputBoxWithIcon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 stroke-slate-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  }
                  width="w-[512px]"
                  placeholder="Where to?"
                ></InputBoxWithIcon>
                <div id="date-inputs" className="space-x-5">
                  <InputBoxWithIcon
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 stroke-slate-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    }
                    width="w-[246px]"
                    placeholder="Start Date"
                  ></InputBoxWithIcon>
                  <InputBoxWithIcon
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 stroke-slate-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    }
                    width="w-[246px]"
                    placeholder="End Date"
                  ></InputBoxWithIcon>
                </div>
                <div className="flex justify-center">
                  <XLargeButton
                    text="Create Trip"
                    colour="bg-primary-green"
                    textColour="white"
                    border=""
                  ></XLargeButton>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default NewTripModal;
