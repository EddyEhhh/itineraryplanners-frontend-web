import styles from "./PersonalInfoCard.scss";
import React from "react";
import LargeButton from "../RectangleButton/LargeButton/LargeButton";
import InputBox from "../InputBox";

function PersonalInfoCard(props) {
  return (
    <div id="details-card" className="shadow p-5 md:p-10 lg:p-10">
      <div className="space-y-10">
        <InputBox
          title="Username"
          placeholder={props.data.username}
          type="text"
          disabled='true'
        ></InputBox>
        <InputBox
          title="Display Name"
          placeholder={props.data.displayName}
          type="text"
        ></InputBox>
        {/*<InputBox*/}
        {/*  title="Phone Number"*/}
        {/*  placeholder="+65 9123 6789"*/}
        {/*  type="tel"*/}
        {/*></InputBox>*/}
        <InputBox
          title="Email Address"
          placeholder={props.data.email}
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
