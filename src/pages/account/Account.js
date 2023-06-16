import React from "react";
import styles from "./Account.scss";
import InputBox from "../../components/InputBox";
import { Suspense, useState } from "react";
import PersonalInfoCard from "../../components/PersonalInfoCard/PersonalInfoCard";
import LargeButton from "../../components/RectangleButton/LargeButton/LargeButton";
import SecurityCard from "../../components/SecurityCard/SecurityCard";
import NotificationsCard from "../../components/NotificationsCard/NotificationsCard";
import UserPreferencesCard from "../../components/UserPreferencesCard/UserPreferencesCard";

function Account() {
  const [showPersonalInfoCard, setPersonalInfoCard] = useState(true);
  const personalInfoCardHandler = () => {
    if (!showPersonalInfoCard) {
      setPersonalInfoCard(!showPersonalInfoCard);
      // highlightPersonalInfo();
      setSecurityCard(false);
      setNotificationsCard(false);
      setUserPreferencesCard(false);
    }
  };
  const [showSecurityCard, setSecurityCard] = useState(false);
  const securityCardHandler = () => {
    if (!showSecurityCard) {
      setSecurityCard(!showSecurityCard);
      // highlightSecurity();
      setPersonalInfoCard(false);
      setNotificationsCard(false);
      setUserPreferencesCard(false);
    }
  };
  const [showNotificationsCard, setNotificationsCard] = useState(false);
  const notificationsCardHandler = () => {
    if (!showNotificationsCard) {
      setNotificationsCard(!showNotificationsCard);
      // highlightNotifications();
      setSecurityCard(false);
      setPersonalInfoCard(false);
      setUserPreferencesCard(false);
    }
  };
  const [showUserPreferencesCard, setUserPreferencesCard] = useState(false);
  const userPreferencesCardHandler = () => {
    if (!showUserPreferencesCard) {
      setUserPreferencesCard(!showUserPreferencesCard);
      // highlightUserPreferences();
      setPersonalInfoCard(false);
      setSecurityCard(false);
      setNotificationsCard(false);
    }
  };

  return (
    <Suspense fallback="loading">
      <div>
        <div
          id="account-page"
          className="relative flex overflow-hidden h-screen"
        >
          <div id="account-cards" className="space-x-10">
            <div id="profile-card">
              <div className="space-y-5">
                <div className="space-y-5">
                  <div id="circle"></div>
                  <h1 className="flex justify-center">Taro Sakamoto</h1>
                </div>
                <button
                  onClick={personalInfoCardHandler}
                  className={`${highlightButton(showPersonalInfoCard)}`}
                >
                  <svg
                    id="account-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                  Personal Info
                </button>
                <button
                  onClick={securityCardHandler}
                  className={`${highlightButton(showSecurityCard)}`}
                >
                  <svg
                    id="account-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  Login & Security
                </button>
                <button
                  onClick={notificationsCardHandler}
                  className={`${highlightButton(showNotificationsCard)}`}
                >
                  <svg
                    id="account-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                  Notifications
                </button>
                <button
                  onClick={userPreferencesCardHandler}
                  className={`${highlightButton(showUserPreferencesCard)}`}
                >
                  <svg
                    id="account-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  User Preferences
                </button>
                <div className="flex justify-center">
                  <LargeButton
                    border="danger-red"
                    text="Log out"
                    textColour="danger-red"
                    hover="false"
                    colour="white"
                  ></LargeButton>
                </div>
              </div>
            </div>
            {showPersonalInfoCard && <PersonalInfoCard />}
            {showSecurityCard && <SecurityCard />}
            {showNotificationsCard && <NotificationsCard />}
            {showUserPreferencesCard && <UserPreferencesCard />}
          </div>
        </div>
      </div>
    </Suspense>
  );

  function highlightButton(shouldHighlight) {
    return shouldHighlight === true
      ? "highlight-button-side"
      : "no-highlight-button-side";
  }
}

export default Account;
