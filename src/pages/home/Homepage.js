import React from "react";
import Calendar from "../../components/Calendar";

export function Homepage() {
  return (

    <div className="grid-container">
        <div className="grid-item"></div>
      <div className="grid-item">
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default Homepage;
