import React from "react";
import TripBox from "../../components/TripBox/TripBox";
import styles from "./MyTrips.scss";
import FAFAFA from "../../icons/FAFAFA.jpg";
import AddButton from "../../components/AddButton/AddButton";
import { useState, Suspense } from "react";
import NewTripModal from "../../components/NewTripModal/NewTripModal";

export function MyTrips() {
  const [showNewTripModal, setNewTripModal] = useState(false);

  const newTripModalHandler = () => {
    setNewTripModal(!showNewTripModal);
  };

  return (
    <Suspense>
      <div>
        <div className="flex flex-col pt-10 pb-20">
          <h1 id="my-trips-title">My Trips</h1>
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
    </Suspense>
  );
}

export default MyTrips;
