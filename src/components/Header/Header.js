import React from "react";
import './Header.scss';
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="MAIN HEADER w-full h-12 flex items-center justify-between shadow pl-10 pr-10 shadow-base font-semibold text-sm ">
      <div className="left header flex items-center justify-around h-12 w-72 outline">
        <button className="mr-4">
          <XMarkIcon className="w-6"></XMarkIcon>
        </button>

        <div className="Home-Box h-11 flex items-center">
          <HighlightHome></HighlightHome>
        </div>

        <div className="Home-Box h-11 flex items-center">
          <HighlightMyTrips></HighlightMyTrips>
        </div>

        <div className="Home-Box h-11 flex items-center">
          <HighlightCalendar></HighlightCalendar>
        </div>
      </div>

      <div className="Center-Header flex items-center justify-end">
        <div className="Nav-Icon absolute mr-2">
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
          placeholder="Plan your trip"
          className={`
                 text-sm h-9 rounded-full shadow shadow-outline px-5 w-60
                placeholder-slate-500 placeholder-opacity-75 placeholder:text-center
                focus:outline-none focus:ring-2 focus:border-primary-green
                `}
        ></input>
      </div>

      <div className="Right-Header flex items-center justify-between h-12 w-72">
        <div className="Notif-Lang-Box flex items-center justify-between w-16 ml-40 h-12 pl-2">
          <button className="hover:text-hover-gray">EN</button>

          <button className="hover:text-hover-gray">
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
        </div>

        <button className="bg-gray-500 w-10 h-10 rounded-full hover:text-hover-gray">
          A
        </button>
      </div>
    </div>
  );
}

function HighlightHome(props) {
  const location = useLocation();
  const navigate = useNavigate();
    return (
      <div>
          <button className={`${location.pathname === "/home" ? 'underline-button' : 'no-underline-button'}
            `}
                  style={{ color: "primary-orange" }}
                  onClick={() => navigate("/home")}
          > Home
          </button>
      </div>
    );
  }


function HighlightMyTrips() {
  const location = useLocation();
  const navigate = useNavigate();
    return (
      <div>
        <button className={` ${location.pathname === "/my-trips" ? 'underline-button' : 'no-underline-button'} `}
                style={{ color: "primary-orange" }}
                onClick={() => navigate("/my-trips")}
        >
          My Trips
        </button>
      </div>
    );
  }

function HighlightCalendar() {
  const location = useLocation();
  const navigate = useNavigate();
    return (
      <div>
        <button
          className={` ${location.pathname === "/calendar" ? 'underline-button' : 'no-underline-button'} 
          `}
          style={{ color: "primary-orange" }}
          onClick={() => navigate("/calendar")}
        >
          Calendar
        </button>
      </div>
    );
}

export default Header;