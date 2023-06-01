import React    from "react";
import template from "./XLargeButton.jsx";

function XLargeButton(props) {
  return (
        <button className=
            "w-32 h-8 flex items-center break-keep justify-center rounded-full bg-transparent font-semibold text-red-500 text-lg
            hover:transition-all ease-in duration-200 hover:bg-red-500 hover:text-white hover:w-72 hover:h-14
            "> 
        {props.text} 
        </button>
);
}
export default XLargeButton;
