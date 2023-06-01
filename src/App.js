import './App.css'
import React from 'react'

import { ReactComponent as CalendarIcon } from "./icons/calendar.svg";
import { ReactComponent as DeleteIcon } from "./icons/delete.svg";
import SmallCircleButton from "./components/CircleButton/SmallCircleButton";
import LargeButton from "./components/RectangleButton/LargeButton";
import SmallButton from "./components/RectangleButton/SmallButton";
import MediumButton from "./components/RectangleButton/MediumButton";
import XLargeButton from "./components/RectangleButton/XLargeButton";
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div>
          <Calendar></Calendar>

    
        <div className="h-8 w-full flex justify-center items-center">
          <SmallButton text = "Login" hover = "true" />
        </div>

        <div className="h-10 w-full flex justify-center items-center">
          <MediumButton text = "Login" hover = "true" />
        </div>

        <div className="h-12 w-full flex justify-center items-center">
          <LargeButton text = "Enter page" hover = "true" />
        </div>

        <div className="h-14 w-full flex justify-center items-center">
          <XLargeButton text = "Delete account" hover = "true" />
        </div>
        </div>


)
}
export default App