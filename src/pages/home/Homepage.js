import React, { useRef, useState } from "react";
import Calendar from "../../components/Calendar";
import kr from "../landing/kr.jpeg";
import MediumButton from "../../components/RectangleButton/MediumButton/MediumButton";
import styles from "./Homepage.scss";
import TripScrollbar from "../../components/TripScrollbar/TripScrollbar";
import NewTripModal from "../../components/NewTripModal/NewTripModal";

export function Homepage() {
  const [showNewTripModal, setNewTripModal] = useState(false);
  const handleOnNewTripClose = () => setNewTripModal(false);
  const handleOnNewTripOpen = () => setNewTripModal(true);

  return (
    <div>
      <div className="w-full h-[500px] flex items-center">
        <div>
          <Calendar></Calendar>
        </div>

        <div className="bg-white shadow-md ml-5 rounded-2xl w-full h-[450px] ">
          {/* header */}
          <div className="overflow-hidden h-48 rounded-t-2xl relative font-bold">
            <div className="absolute bg-white m-5 drop-shadow-5xl w-fit p-3 rounded-2xl h-14 flex justify-center items-center text-lg">
              Trip to South Korea
            </div>
            <img className="object-contain rounded-t-2xl " src={kr} />
          </div>

          {/* body */}
          <div className="pl-8 pr-8 pt-2">
            <div className="flex justify-between items-center h-10 font-bold ">
              <div className={"w-fit"}>Details</div>
              <div className={"w-fit"}>15 June ~ 18 June</div>
            </div>

            <div className=" h-40 w-full pt-2">
              <div className="font-semibold">
                Location1 to Location2 - SQ 54032
              </div>
              <div className="font-sm opacity-90 text-base">
                Jun 15, 1:45 - 8:55am (6hours 10mins)
              </div>

              <div className="font-semibold pt-5">Who's going</div>
              <div className="opacity-90 text-base">
                Me,Sis,Bro,Mum,Dad (6pax)
              </div>
            </div>

            <div className="font-semibold">5 activities planned</div>
          </div>
        </div>
      </div>

      <div className=" h-72 flex-col">
        <div className="flex justify-between items-center">
          <div className="h-10 font-bold text-2xl ">Upcoming trips</div>

          <div className="h-12 flex justify-center items-center">
            <div>
              <MediumButton
                text="Create new trip"
                textColour="white"
                hover=""
                colour="primary-green"
                disabled=""
                border=""
                showModal = {handleOnNewTripOpen}
              />
            </div>
            <div id="new-trip-wrapper">
              <NewTripModal
                visible={showNewTripModal}
                onClose={handleOnNewTripClose}
              ></NewTripModal>
            </div>
          </div>
        </div>

        <TripScrollbar></TripScrollbar>
      </div>
    </div>
  );
}

export default Homepage;
