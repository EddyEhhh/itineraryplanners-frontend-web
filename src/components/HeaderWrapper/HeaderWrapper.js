import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../../pages/home/Homepage";
import MyTrips from "../../pages/my-trips/MyTrips";
import CalendarPage from "../../pages/calendar/CalendarPage";

function HeaderWrapper() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<Homepage></Homepage>}></Route>
            <Route path="/my-trips" element={<MyTrips></MyTrips>}></Route>
            <Route
              path="/calendar"
              element={<CalendarPage></CalendarPage>}
            ></Route>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default HeaderWrapper;
