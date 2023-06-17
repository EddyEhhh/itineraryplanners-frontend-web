import React from "react";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";

//w-40   h-8
function MediumButton(props) {
  const navigate = useNavigate();
  const colour = `${props.colour}`;
  const textColour = `${props.textColour}`;
  return (
    <div>
      <button
        className={`flex items-center justify-center rounded-full text-base font-semibold
        ${
          props.hover === "true"
            ? `w-28 h-1  bg-transparent ${textColour} hover:transition-all ease-in duration-200 hover:${colour} hover:text-white hover:w-40 hover:h-10`
            : `w-40 h-10 text-white ${colour}
                ${props.disabled === "true" ? `opacity-50` : ``}`
        }
    `}
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    </div>
  );
}

export default MediumButton;
