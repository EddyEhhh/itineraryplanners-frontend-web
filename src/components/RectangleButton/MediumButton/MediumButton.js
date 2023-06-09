import React from "react";
import {useNavigate} from "react-router-dom";

//w-40   h-8
function MediumButton(props) {
    const navigate = useNavigate();
    let colour = `${props.colour}`;
      return (
          <div>
              <button className=
                  {` flex items-center justify-center rounded-full font-semibold text-base
                      ${props.hover === "true" ? `w-28 h-1 bg-transparent text-${props.textColour}
                      hover:transition-all ease-in duration-200 hover:bg-${colour} hover:text-white hover:w-40 hover:h-10` 
                      : `w-40 h-10 text-${props.textColour}
                      ${props.border === "" ? `bg-${colour}`:`bg-transparent outline outline-${props.border} text-black`}
                      ${props.disabled === "true" ? `opacity-50` : ''}
                      `}
                  `}
              onClick={() => navigate(`${props.route}`) }>
                  {props.text}
              </button>
          </div>

      );
}

export default MediumButton;