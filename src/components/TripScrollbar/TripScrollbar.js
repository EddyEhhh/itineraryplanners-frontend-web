import React, { useRef } from "react";
import styles from "./TripScrollbar.scss";
import TripBox from "../TripBox/TripBox";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

function TripScrollbar() {
  const scrollWrapperRef = useRef(null);
// function isOverflown(element) {
//   return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
// }
  const scrollLeft = () => {
    scrollWrapperRef.current.scrollBy({
      left: -1738,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollWrapperRef.current.scrollBy({
      left: 1738,
      behavior: "smooth",
    });
  };


  return (
    <div id="trip-shortcuts">

      <button
          id="left-arrow" onClick={scrollLeft}
          className= "flex items-center justify-center h-[268px] rounded-l-md w-8 bg-black bg-opacity-20">
        <ChevronLeftIcon className="bg-transparent text-white opacity-60"></ChevronLeftIcon>
      </button>

      <div
        id = "trips-shortcuts"
        class="scroll-images"
        ref={scrollWrapperRef}
        className="flex overflow-x-clip  overflow-x-scroll overflow-hidden scrollbar-hide "
      >
        <div className="flex gap-7">
          <TripBox title = "Title" duration = "Duration" ></TripBox>
          <TripBox title = "Title" duration = "Duration" ></TripBox>
          <TripBox title = "Title" duration = "Duration" ></TripBox>
          <TripBox title = "Title" duration = "Duration" ></TripBox>
          <TripBox title = "Title2" duration = "Duration" ></TripBox>
          <TripBox title = "Title2" duration = "Duration" ></TripBox>
          <TripBox title = "Title2" duration = "Duration" ></TripBox>
          <TripBox title = "Title2" duration = "Duration" ></TripBox>
          <TripBox title = "Title3" duration = "Duration" ></TripBox>
          <TripBox title = "Title3" duration = "Duration" ></TripBox>
          <TripBox title = "Title3" duration = "Duration" ></TripBox>
          <TripBox title = "Title3" duration = "Duration" ></TripBox>
          <TripBox title = "Title4" duration = "Duration" ></TripBox>
          <TripBox title = "Title4" duration = "Duration" ></TripBox>
          <TripBox title = "Title4" duration = "Duration" ></TripBox>
          <TripBox title = "Title4" duration = "Duration" ></TripBox>
        </div>

        <button
            id="right-arrow" onClick={scrollRight}
            className= "flex items-center justify-center h-[268px] rounded-r-md w-8 bg-black bg-opacity-20">
          <ChevronRightIcon className="bg-transparent text-white opacity-60"></ChevronRightIcon>
        </button>

      </div>

    </div>
  );
}

export default TripScrollbar;
