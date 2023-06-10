import React, { useRef } from "react";
import styles from "./TripScrollbar.scss";
import TripBox from "../TripBox/TripBox";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg"

function TripScrollbar() {
  const scrollWrapperRef = useRef(null);

  const scrollLeft = () => {
    scrollWrapperRef.current.scrollBy({
      left: -550,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollWrapperRef.current.scrollBy({
      left: 550,
      behavior: "smooth",
    });
  };

  return (
    <div id="trip-shortcuts">
      <button id="left-arrow" onClick={scrollLeft}>
        <LeftArrow></LeftArrow>
      </button>
      <div
        class="scroll-images"
        ref={scrollWrapperRef}
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
      <button id="right-arrow" onClick={scrollRight}>
        <RightArrow></RightArrow>
      </button>
    </div>
  );
}

export default TripScrollbar;
