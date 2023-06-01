import React    from "react";
import template from "./MediumButton.jsx";

//use this as div
/*
   <div className = "h-10 outline w-full flex justify-center items-center">
        <MediumButton text = 'Medium'/>
    </div>
*/
function MediumButton(props) {
    if (props.hover == "true") {
        return (
            <div>
                <button className="
                    w-28 h-1 flex items-center justify-center rounded-full bg-transparent font-semibold text-red-500 text-base
                    hover:transition-all ease-in duration-200 hover:bg-red-500 hover:text-white hover:w-36 hover:h-8
                ">
                    {props.text}
                </button>
            </div>

        );
    }
    return (
        <div>
            <button className="
                w-36 h-8 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-base
            ">
                {props.text}
            </button>
        </div>
    );
}

export default MediumButton;
