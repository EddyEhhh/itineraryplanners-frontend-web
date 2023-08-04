import React, { Suspense } from "react";
import "./Header.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import LangDropDown from "../langDropDown/LangDropDown";
import { useTranslation } from "react-i18next";
import {useAuth} from "../../contexts/AuthContext";
import {getProfilePicture} from "../../services/AccountService";

function Header() {
  const navigate = useNavigate();
  const [langDropDown, setLangDropDown] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const [showHamburgerDropDown, setHamburgerDropDown] = useState(false);
  const hamburgerDropDownHandler = () => {
    setHamburgerDropDown(!showHamburgerDropDown);
  }

  const displayImage = (username) => {
    getProfilePicture(username).then(
        res => {
          try {
            if(res !== undefined){
              setImageUrl(res.data);
            }
            document.getElementById("profilePic").src = imageUrl;
          } catch (e) {
            console.log(e);
          }
        }
    )
  }

  const { account } = useAuth();


  function langDropDownHandler() {
    setLangDropDown(!langDropDown);
  }
  const { t, i18n } = useTranslation("header");

  return (
    <Suspense>
      <div className="MAIN HEADER flex items-center z-10 justify-center md:justify-between w-full sm:w-full pl-0 pr-0 sm:pl-40 sm:pr-40 sticky top-0 bg-white h-12 shadow font-semibold text-sm">
        <div className="left-header flex items-center justify-around h-12 min-[834px]:w-fit w-0 gap-4 min-[834px]:visible invisible">
          <div className="Home-Box h-11 flex items-center ">
            <HighlightHome></HighlightHome>
          </div>

          <div className="Home-Box h-11 flex items-center">
            <HighlightMyTrips></HighlightMyTrips>
          </div>

          <button className={"min-[834px]:invisible visible"}
              id="hamburger-icon"
              onClick={hamburgerDropDownHandler}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="Center-Header flex items-center justify-end mr-auto ml-auto">
          <div className="Nav-Icon absolute mr-2 ">
            <button className="bg-primary-green rounded-full w-7 h-7 flex items-center justify-center">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                />
              </svg>
            </button>
          </div>
            <input
                type="text"
                placeholder={t("SearchBarPlaceholder")}
                className={` 
                text-sm h-9 w-full sm:w-60 shrink-0 rounded-full shadow shadow-outline border-background-gray
                placeholder-slate-500 placeholder-opacity-75 placeholder:text-center
                focus:ring-1 focus:border-primary-green
                `}
            ></input>


        </div>

        <div className="Right-Header flex items-center justify-between h-12 w-0 gap-5 min-[834px]:visible min-[834px]:w-fit invisible">
          <button
            onClick={langDropDownHandler}
            className="hover:text-primary-orange"
          >
            {t("Lang")}
          </button>
          {langDropDown && <LangDropDown></LangDropDown>}
          <button className="hover:text-primary-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </button>

          <button
            className="bg-gray-500 w-10 h-10 rounded-full hover:text-hover-gray"
            onClick={() => navigate("./account")}
          >
            <img id="profilePic2" src={imageUrl} className="img-display"/>
          </button>
        </div>
      </div>
      <div id="hamburger" className={"sticky top-12"} >
          { showHamburgerDropDown && (
            <div className="w-full bg-white h-fit flex flex-col items-center justify-center shadow-lg ease-in-out duration-100 ">
              <HighlightHomeDropdown/>
            </div>
          ) }
      </div>
    </Suspense>
  );
}

function HighlightHome(props) {
  const { t, i18n } = useTranslation("header");

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Suspense>
      <div>
        <button
          className={`${
            location.pathname === "/home"
              ? "underline-button"
              : "no-underline-button"
          }
            `}
          style={{ color: "primary-orange" }}
          onClick={() => navigate("/home")}
        >
          {" "}
          {t("Home")}
        </button>
      </div>
    </Suspense>
  );
}

function HighlightMyTrips() {
  const { t, i18n } = useTranslation("header");

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={` ${
          location.pathname === "/my-trips"
            ? "underline-button"
            : "no-underline-button"
        } `}
        style={{ color: "primary-orange" }}
        onClick={() => navigate("/my-trips")}
      >
        {t("Trips")}
      </button>
    </div>
  );
}

function HighlightHomeDropdown() {
  const { t, i18n } = useTranslation("header");

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Suspense>
      <div className={"font-semibold w-full flex flex-col"} >
        <button
          className={`h-[64px] ${
            location.pathname === "/home"
              ? "bg-primary-green"
              : ""
          }
            transition: ease-in-out duration-300`}
          style={{ color: "primary-orange" }}
          onClick={() => navigate("/home")}
        >
          {" "}
          {t("Home")}
        </button>
        <button
            className={`h-[64px] ${
                location.pathname === "/my-trips"
                    ? "bg-primary-green"
                    : ""
            } transition: ease-in-out duration-300`}
            style={{ color: "primary-orange" }}
            onClick={() => navigate("/my-trips")}
        >
          {t("Trips")}
        </button>
        <button
            className={`h-[64px] ${
                location.pathname === "/Account"
                    ? "bg-primary-green"
                    : ""
            } transition: ease-in-out duration-300`}
            style={{ color: "primary-orange" }}
            onClick={() => navigate("/Account") }
        >
          {t("Profile")}
        </button>

      </div>
    </Suspense>
  );
}



// function HighlightCalendar() {
//   const location = useLocation();
//   const navigate = useNavigate();
//     return (
//       <div>
//         <button
//           className={` ${location.pathname === "/calendar" ? 'underline-button' : 'no-underline-button'}
//           `}
//           style={{ color: "primary-orange" }}
//           onClick={() => navigate("/calendar")}
//         >
//           Calendar
//         </button>
//       </div>
//     );
// }

export default Header;
