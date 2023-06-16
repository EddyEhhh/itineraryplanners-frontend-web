import styles from "./PersonalInfoCard.scss";
import React from "react";
import LargeButton from "../RectangleButton/LargeButton/LargeButton";
import InputBox from "../InputBox";

function PersonalInfoCard() {
  return (
    <div id="details-card">
      <div className="space-y-10">
        <div className="flex row-auto space-x-5 ">
          <InputBox
            title="First Name"
            placeholder="First Name"
            type="text"
            width="w-[350px]"
          ></InputBox>
          <InputBox
            title="Last Name"
            placeholder="First Name"
            type="text"
            width="w-[350px]"
          ></InputBox>
        </div>
        <div className="flex row-auto space-x-5 ">
          <InputBox
            title="Phone Number"
            placeholder="+65 9123 6789"
            type="tel"
            width="w-[350px]"
          ></InputBox>
          <InputBox
            title="Email Address"
            placeholder="tarosakamoto@gmail.com"
            type="email"
            width="w-[350px]"
          ></InputBox>
        </div>
        <div className="flex row-auto space-x-5 ">
          <InputBox
            title="City"
            placeholder="Singapore"
            type="text"
            width="w-[350px]"
          ></InputBox>
          <InputBox
            title="State/County"
            placeholder="NA"
            type="text"
            width="w-[350px]"
          ></InputBox>
        </div>
        <div className="flex row-auto space-x-5">
          <InputBox
            title="Country"
            placeholder="Singapore"
            type="text"
            width="w-[350px]"
          ></InputBox>
          <InputBox
            title="Gender"
            placeholder="Male"
            type="text"
            width="w-[350px]"
          ></InputBox>
        </div>
        <div>
          <LargeButton
            text="Save"
            colour="primary-green"
            textColour="white"
            border=""
          ></LargeButton>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoCard;
