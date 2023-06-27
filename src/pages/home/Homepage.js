import React, { Suspense, useRef, useState } from "react";
import Calendar from "../../components/Calendar";
import kr from "../landing/kr.jpeg";
import MediumButton from "../../components/RectangleButton/MediumButton/MediumButton";
import styles from "./Homepage.scss";
import TripScrollbar from "../../components/TripScrollbar/TripScrollbar";
import NewTripModal from "../../components/NewTripModal/NewTripModal";
import {useTranslation} from "react-i18next";



const Homepage = () => {
  const [showNewTripModal, setNewTripModal] = useState(false);
  const newTripModalHandler = () => {
    setNewTripModal(!showNewTripModal);
  };

  const [t, i18n] = useTranslation("homepage");
  return (
    <div>

      <div className="w-full h-fit flex flex-col items-center lg:flex-row">
        <div className={"mb-10 lg:mb-0"}>
          <Calendar></Calendar>
        </div>

        <div className="bg-white shadow-md z-0 rounded-2xl sm:w-[500px] h-[500px] w-[350px] h-[450px] mb-20 lg:mb-0 lg:w-fit lg:mr-0 lg:ml-3">
          {/* header */}
          <div className="overflow-hidden h-48 rounded-t-2xl relative font-bold">
            <div className="absolute bg-white m-5 drop-shadow-5xl w-fit p-3 rounded-2xl h-14 flex justify-center items-center text-lg">
              Trip to South Korea
            </div>
            <img className="object-contain rounded-t-2xl " src={kr} />
          </div>

          {/* body */}
          <div className="pl-8 pr-8 pt-2 ">
            <div className="flex justify-between items-center h-10 font-bold ">
              <div className={"w-fit"}>
                {t("IncomingTrips.Details")}</div>
              <div className={"w-fit"}>
                {t("IncomingTrips.Date")}</div>
            </div>

            <div className=" h-40 w-full pt-2">
              <div className="font-semibold">
                {t("IncomingTrips.Location")}
              </div>
              <div className="font-sm opacity-90 text-base">
                Jun 15, 1:45 - 8:55am (6hours 10mins)
              </div>

              <div className="font-semibold pt-12">
                {t("IncomingTrips.Participants")}
              </div>
              <div className="opacity-90 text-base">
                Mother, Father, Sister
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit w-full flex flex-col sm:flex-col mt-5">
        <div className="flex justify-between items-center flex-col lg:flex-row sm:flex-col">
          <div className="h-10 font-bold text-2xl ">{t('UpcomingTrips.Title')}</div>

          <div className="h-12 flex justify-center items-center">
            <div>
              <MediumButton
                text= {t('Button.Start')}
                textColour="black"
                hover=""
                colour="bg-primary-green"
                disabled=""
                border=""
                handleClick={newTripModalHandler}
              />
            </div>
          </div>
        </div>
        <TripScrollbar></TripScrollbar>
          {showNewTripModal && (
            <NewTripModal onClose={newTripModalHandler}></NewTripModal>
          )}
      </div>
    </div>
  );
};

export default Homepage;
