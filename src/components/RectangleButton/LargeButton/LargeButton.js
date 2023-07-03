import React from "react";
import { useNavigate } from "react-router-dom";

//w-64 h-10
function LargeButton(props) {
  const navigate = useNavigate();
  let colour = `${props.colour}`;

  return (
    <div className>
      <button
        className={`flex items-center justify-center rounded-full text-lg font-semibold 
            ${
              props.hover === "true"
                ? `w-32 h-10  bg-transparent ${props.textColour} 
            hover:transition-all ease-in duration-200 hover:${colour} hover:text-white hover:w-60 hover:h-10`
                : `w-64 h-10 text-white opacity-100 hover:opacity-75 active:opacity-100 ${colour}
            ${props.disabled === "true" ? `opacity-50` : ``}
            `
            }
        `}
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    </div>
  );
}

export default LargeButton;
