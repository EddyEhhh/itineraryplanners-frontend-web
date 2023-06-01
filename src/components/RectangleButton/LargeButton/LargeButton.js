import React    from "react";
import template from "./LargeButton.jsx";

//use this as div
/*
 <div className = "h-12 flex justify-center items-center w-full outline">
        <LargeButton text = 'Large button'/>
  </div>

*/


function LargeButton(props) {
    if (props.hover == "true") {
        return (
            <div className>
                <button className="
                    w-32 h-8 flex items-center break-keep justify-center rounded-full bg-transparent font-semibold text-red-500 text-lg
                    hover:transition-all ease-in duration-200 hover:bg-red-500 hover:text-white hover:w-64 hover:h-10
                ">
                    {props.text}
                </button>
            </div>
        );
    }
    return (
        <div className>
            <button className="
                w-64 h-10 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-lg
            ">
            {props.text}
            </button>
        </div>
    );

}

export default LargeButton;
