import React from "react";
import { useNavigate } from "react-router-dom";

function SmallButton(props) {
    let colour = `${props.colour}`;
    const navigate = useNavigate();
    return (
         <div className>
             <button className=
                 {` flex items-center justify-center rounded-full text-sm 
                    ${props.hover === "true" ? `w-1 h-1 bg-transparent font-semibold ${props.textColour} ` +
                     `hover:transition-all ease-in duration-300 hover:bg-${colour} hover:text-white hover:w-32 hover:h-8`
                     : `w-32 h-8 text-white ${colour}
                     ${props.disabled === "true" ? 'opacity-50' : ''} 
                    `} 
                `}
                 onClick={props.handleClick} >
             {props.text}
             </button>
         </div>
     );
}

export default SmallButton;