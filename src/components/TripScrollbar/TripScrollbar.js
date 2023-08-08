import React, { useRef, useEffect, useState } from "react";
import styles from "./TripScrollbar.scss";
import TripBox from "../TripBox/TripBox";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {useAuth} from "../../contexts/AuthContext";
import {getLatestTrip} from "../../services/TripService";
import {useNavigate} from "react-router-dom";

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

  const [allTrip, setAllTrip] = useState([]);

  const { account } = useAuth();
  // const getTrip = () => {
  //   setIsSubmit(true);
  //   // console.log("Test: ", registerFormValidationError.usernameErrorMessage);
  //
  //   getLatestTrip(account?.username).then(res => {
  //
  //     setAllTrip(res.data);
  //
  //     }).catch(err =>{
  //
  //     }).finally(() => {
  //       setIsSubmit(false);
  //     })
  // }

  useEffect(() => {
    getLatestTrip(account?.username).then(res => {
      setAllTrip(res.data);
    }).catch(err =>{
    }).finally(() => {
    })


  }, [])

  const navigate = useNavigate();

  const scrollLeft = () => {
    const scrollWrapper = scrollWrapperRef.current;

    scrollWrapperRef.current.scrollBy({
      left: -(scrollWrapper.clientWidth + 30) ,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {

    const scrollWrapper = scrollWrapperRef.current;

    scrollWrapperRef.current.scrollBy({
      left: scrollWrapper.clientWidth + 30,
      behavior: "smooth",
    });
  };

  const onTripClick = (id) =>{
    navigate("/itinerary?id=" + id);
  }


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
        className="w-fit flex
        lg:flex-row  lg:overflow-x-clip  lg:overflow-x-scroll
        flex-col overflow-y-clip overflow-y-scroll h-[400px] overflow-hidden scrollbar-hide"
      >
        <div className="flex flex-col lg:flex-row sm:flex-col lg:gap-[1.9rem]">
          {/*<TripBox title = "Title" duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
          {allTrip && allTrip.map(trip =>
              <TripBox key={trip.id} data={trip} onClick={() => onTripClick(trip.id)}></TripBox>
          )}
          {/*<TripBox data = {null} duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
          {/*<TripBox title = "Title" duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
          {/*<TripBox title = "Title" duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
          {/*<TripBox title = "Title" duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
          {/*<TripBox title = "Title2" duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
          {/*<TripBox title = "Title2" duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
          {/*<TripBox title = "Title2" duration = "Duration" width = "w-[406.5px]"></TripBox>*/}
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
