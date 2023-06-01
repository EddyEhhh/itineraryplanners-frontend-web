import React    from "react";
import template from "./MediumButton.jsx";

//use this as div
/*
   <div className = "h-10 outline w-full flex justify-center items-center">
        <MediumButton text = 'Medium'/>
    </div>
*/
function MediumButton(props) {
  return (
    <div className>
        <button className=
            "w-28 h-1 flex items-center break-keep justify-center rounded-full bg-transparent font-semibold text-red-500 text-base
            hover:transition-all ease-in duration-300 hover:bg-red-500 hover:text-white hover:w-44 hover:h-10
            "> 
        {props.text} 
        </button>
    </div>     
);
}

export default MediumButton;
