import './App.css'
import React from 'react'
import {SmallButton, MediumButton, LargeButton, XLargeButton} from "./components/RectangleButton/RectangleButton";
import Calendar from './components/Calendar/Calendar';
import InputBox from "./components/InputBox";


function App() {
  return (
    <div>
        <Calendar></Calendar>

        <div className=" h-8 w-full flex justify-center items-center">
          <SmallButton text = "Login"  hover= "true"/>
        </div>

        <div className="h-10 w-full flex justify-center items-center">
          <MediumButton text = "Login" hover = "true" />
        </div>

        <div className="h-12 w-full flex justify-center items-center">
          <LargeButton text = "Enter page" hover = "true" />
        </div>

        <div className="h-14 w-full flex justify-center items-center">
          <XLargeButton text = "Delete account" hover="true" />
        </div>

        <div className = "flex justify-center items-center">
            <InputBox title = "Email Address" placeholder = "Enter password" type = "email" width = "72"
                      warning = "warning message"/>
        </div>


    </div>


)
}
export default App