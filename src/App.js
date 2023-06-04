import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import MyTrips from "./pages/my-trips/MyTrips";
import CalendarPage from "./pages/calendar/CalendarPage";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/landing/Landing.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Landing/>}>
        </Route>
          <Route path = "/" element = {<Layout/>}>
            <Route path="/home" element={<Homepage/>}></Route>
            <Route path="/my-trips" element={<MyTrips/>}></Route>
            <Route
                path="/calendar"
                element={<CalendarPage/>}
            ></Route>
          </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
// <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
