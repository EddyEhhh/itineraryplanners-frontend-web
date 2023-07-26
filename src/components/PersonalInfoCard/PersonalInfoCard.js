import styles from "./PersonalInfoCard.scss";
import React, {useEffect} from "react";
import LargeButton from "../RectangleButton/LargeButton/LargeButton";
import InputBox from "../InputBox";
import {useState} from "react";
import {saveAccountDetails} from "../../services/AccountService";
import AlertMessage from "../AlertMessageModal/AlertMessage";

function PersonalInfoCard(props) {
  const [displayName, setDisplayName] = useState(props.data.displayName);
  const [email, setEmail] = useState(props.data.email);
  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const saveDetails = (event) => {
      event.preventDefault();
      let data = {
          displayName: displayName,
          email: email
      }
      saveAccountDetails(props.data.username, data).then(res => console.log(res));
      setShowAlertMessage(true);
  };

  useEffect(() => {
      if(showAlertMessage) {
          const timeId = setTimeout(() => {
              setShowAlertMessage(false)
          }, 3000)
          return () => {
              clearTimeout(timeId);
          }
      }
  });

  const displayNameHandler = event => {
    setDisplayName(event.target.value);
  };
  const emailHandler = event => {
    setEmail(event.target.value);
    if(event.target.value === '' || (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value))){
        document.getElementById("invalid-email-message").style.display="none";
    } else {
        document.getElementById("invalid-email-message").style.display="block";
    }
  };

  return (
    <div id="details-card" className="shadow p-5 md:p-10 lg:p-10">

      <div id="details-card-1" className="space-y-10">
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
          <div id="alert-message">
              {showAlertMessage && <AlertMessage status={'success'}/>}
          </div>
          {/*<InputBox*/}
          {/*  title="Phone Number"*/}
          {/*  placeholder="+65 9123 6789"*/}
          {/*  type="tel"*/}
          {/*></InputBox>*/}
          <div id="email-address-input">
              <InputBox
                title="Email Address"
                placeholder={props.data.email}
                type="email"
                onChange={emailHandler}
                value={email}
              ></InputBox>
              <div id="invalid-email-message">
                <p> Invalid Email Address </p>
              </div>
          </div>

        <div id="submit-button" onClick={saveDetails}>
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
