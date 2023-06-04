import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../../pages/home/Homepage";
import MyTrips from "../../pages/my-trips/MyTrips";
import CalendarPage from "../../pages/calendar/CalendarPage";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
  );

}

export default Layout;
