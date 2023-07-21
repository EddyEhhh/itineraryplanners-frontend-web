import styles from "./PersonalInfoCard.scss";
import React from "react";
import LargeButton from "../RectangleButton/LargeButton/LargeButton";
import InputBox from "../InputBox";
import {useState} from "react";



function PersonalInfoCard(props) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const saveDetails = (e) => {

  };

  const displayNameHandler = event => {
    setDisplayName(event.target.value);
    console.log('displayName is: ', event.target.value);
  };
  const emailHandler = event => {
    setEmail(event.target.value);
    console.log('email is: ', event.target.value);
  };

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
            onChange={displayNameHandler}
            value={displayName}
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
            onChange={emailHandler}
            value={email}
          ></InputBox>

        <div onClick={saveDetails}>
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
