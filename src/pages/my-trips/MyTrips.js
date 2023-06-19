import React from "react";
import TripBox from "../../components/TripBox/TripBox";
import styles from "./MyTrips.scss";

export function MyTrips() {
  return (
    <div>
      <div className="flex flex-col pt-10 pb-20">
        <h1>My Trips</h1>
        <div id="my-trips-container">
          <TripBox title="Title" duration="Duration"></TripBox>
          <TripBox title="Title" duration="Duration"></TripBox>
          <TripBox title="Title" duration="Duration"></TripBox>
          <TripBox title="Title" duration="Duration"></TripBox>
          <TripBox title="Title2" duration="Duration"></TripBox>
          <TripBox title="Title2" duration="Duration"></TripBox>
          <TripBox title="Title2" duration="Duration"></TripBox>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
