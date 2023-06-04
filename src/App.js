import "./App.css";
import React from "react";
import HeaderWrapper from "./components/HeaderWrapper/HeaderWrapper";
import Header from "./components/Header/Header"
import {SmallButton} from "./components/RectangleButton/RectangleButton";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import MyTrips from "./pages/my-trips/MyTrips";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div>
      <HeaderWrapper></HeaderWrapper>
    </div>
    );
}
export default App;
