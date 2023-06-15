import React, { useRef, useEffect, useState } from "react";
import styles from "./TripScrollbar.scss";
import TripBox from "../TripBox/TripBox";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

const TripScrollbar = () =>   {

  const scrollWrapperRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const scrollWrapper = scrollWrapperRef.current;
      setShowLeftButton(scrollWrapper.scrollLeft > 0);
      setShowRightButton(scrollWrapper.scrollWidth > scrollWrapper.clientWidth + scrollWrapper.scrollLeft + 1);
    };
    //initial checking for overflow
    checkOverflow();
    const handleScroll = () => {
      checkOverflow();
    };
    //whenever we click the scroll button, we check if there is overflow again
    const scrollInstance = scrollWrapperRef.current;
    scrollInstance.addEventListener("scroll", handleScroll);

    return () => {
      scrollInstance.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollLeft = () => {
    scrollWrapperRef.current.scrollBy({
      left: -1760,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollWrapperRef.current.scrollBy({
      left: 1760,
      behavior: "smooth",
    });
  };


  return (
    <div id="trip-shortcuts" onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
      {showLeftButton && showButtons && (
          <button
              id="left-arrow"
              onClick={scrollLeft}
              className="flex items-center justify-center h-[268px] rounded-l-md w-8 bg-black bg-opacity-20"
          >
            <ChevronLeftIcon className="bg-transparent text-white opacity-70" />
          </button>
      )}
      <div
        id = "trips-shortcuts"
        class="scroll-images"
        ref={scrollWrapperRef}
        className="w-fit flex flex-row lg:flex-row sm:flex-col overflow-x-clip  overflow-x-scroll overflow-hidden scrollbar-hide"

      >
        <div className="flex flex-col lg:flex-row sm:flex-col gap-[2.1rem]">
          <TripBox title = "Title" duration = "Duration" width = "[406.5px]" ></TripBox>
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
      </div>

      {showRightButton && showButtons && (
          <button
              id="right-arrow"
              onClick={scrollRight}
              className="flex items-center justify-center h-[268px] rounded-r-md w-8 bg-black bg-opacity-20"
          >
            <ChevronRightIcon className="bg-transparent text-white opacity-60" />
          </button>
      )}

    </div>
  );
}

export default TripScrollbar;
