import React from "react";
import styles from "./Account.scss";
import InputBox from "../../components/InputBox";
import LargeButton from "../../components/RectangleButton/LargeButton/LargeButton";
import { Suspense } from "react";

function Account() {
  return (
    <Suspense fallback="loading">
      <div>
        <div
          id="account-page"
          className="relative flex overflow-hidden h-screen"
        >
          <div id="account-cards" className="space-x-10">
            <div id="profile-card"></div>
            <div id="details-card">
              <div className="space-y-10">
                <div className="flex row-auto space-x-5 justify-center">
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
                <div className="flex row-auto space-x-5 justify-center">
                  <InputBox
                    title="Phone Number"
                    placeholder="+65 9123 6789"
                    type="number"
                    width="w-[350px]"
                  ></InputBox>
                  <InputBox
                    title="Email Address"
                    placeholder="tarosakamoto@gmail.com"
                    type="email"
                    width="w-[350px]"
                  ></InputBox>
                </div>
                <div className="flex row-auto space-x-5 justify-center">
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
                <div className="flex row-auto space-x-5 justify-center">
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
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Account;
