import React from "react";
import { useNavigate } from "react-router-dom";

//w-64 h-10
function LargeButton(props) {
  const navigate = useNavigate();
  let colour = `${props.colour}`;
  let border = `${props.border}`;

  return (
    <div className>
      <button
        className={`flex items-center justify-center rounded-full text-lg font-semibold 
            ${
              props.hover === "true"
                ? `w-32 h-10  bg-transparent text-${props.textColour} 
            hover:transition-all ease-in duration-200 hover:${colour} hover:text-white hover:w-60 hover:h-10`
                : `w-64 h-10 text-white
            ${
              border === ""
                ? `bg-${colour}`
                : `bg-transparent border-[1.5px] border-${border} text-slate-900`
            } 
            ${props.disabled === "true" ? `opacity-50` : ``}
            `
            }
        `}
        onClick={() => navigate(`${props.route}`)}
      >
        {props.text}
      </button>
    </div>
  );
}

export default LargeButton;
