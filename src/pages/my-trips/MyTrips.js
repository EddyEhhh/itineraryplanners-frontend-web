import React from "react";
import TripBox from "../../components/TripBox/TripBox";
import styles from "./MyTrips.scss";
import FAFAFA from "../../icons/FAFAFA.jpg";
import AddButton from "../../components/AddButton/AddButton";
import { useState, Suspense } from "react";
import NewTripModal from "../../components/NewTripModal/NewTripModal";
import {useTranslation} from "react-i18next";

export function MyTrips() {
  const [showNewTripModal, setNewTripModal] = useState(false);

  const newTripModalHandler = () => {
    setNewTripModal(!showNewTripModal);
  };
  const [t, i18n] = useTranslation("tripsPage");

  return (
      <div>
        <div className="flex flex-col pt-10 pb-20">
          <Suspense>
          <h1 id="my-trips-title">{t('Title')}</h1>
          </Suspense>
          <div id="my-trips-container">
            <TripBox title="Title" duration="Duration"></TripBox>
            <TripBox title="Title" duration="Duration"></TripBox>
            <TripBox title="Title" duration="Duration"></TripBox>
            <TripBox title="Title" duration="Duration"></TripBox>
            <TripBox title="Title2" duration="Duration"></TripBox>
            <TripBox title="Title2" duration="Duration"></TripBox>
            <TripBox title="Title2" duration="Duration"></TripBox>
            <div className="h-fit flex-col items-center justify-center">
              <div className="w-full h-3/4 rounded-md relative">
                <img
                  src={FAFAFA}
                  className="rounded-md w-full h-full border-2 border-dashed border-light-gray"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <AddButton onButtonClick={newTripModalHandler} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showNewTripModal && (
          <NewTripModal onClose={newTripModalHandler}></NewTripModal>
        )}
      </div>
  );
}

export default MyTrips;
