import styles from "./PersonalInfoCard.scss";
import React from "react";
import LargeButton from "../RectangleButton/LargeButton/LargeButton";
import InputBox from "../InputBox";

function PersonalInfoCard() {
  return (
    <div id="details-card">
      <div className="space-y-10">
        <InputBox
          title="First Name"
          placeholder="First Name"
          type="text"
        ></InputBox>
        <InputBox
          title="Last Name"
          placeholder="Last Name"
          type="text"
        ></InputBox>
        <InputBox
          title="Phone Number"
          placeholder="+65 9123 6789"
          type="tel"
        ></InputBox>
        <InputBox
          title="Email Address"
          placeholder="tarosakamoto@gmail.com"
          type="email"
        ></InputBox>
        <div>
          <LargeButton
            text="Save"
            colour="bg-primary-green"
            textColour="white"
            border=""
          ></LargeButton>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoCard;
