import React from "react";
import styles from "./TripScrollbar.scss";
import TripBox from "../TripBox/TripBox"

function TripScrollbar() {
  return (
    <div id="trip-shortcuts">
      <button id="left-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div
        class="scroll-images"
        className="flex mt-5 overflow-x-clip  overflow-x-scroll overflow-hidden scrollbar-hide"
      >
        <div className="flex ">
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
          <TripBox></TripBox>
        </div>
      </div>
      <button id="right-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default TripScrollbar;
