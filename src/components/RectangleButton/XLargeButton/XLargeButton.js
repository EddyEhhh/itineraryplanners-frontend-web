import React    from "react";
import template from "./XLargeButton.jsx";

function XLargeButton(props) {
    if (props.hover == "true") {
        return (
            <button className="
                w-32 h-8 flex items-center justify-center rounded-full bg-transparent font-semibold text-red-500 text-lg
                hover:transition-all ease-in duration-200 hover:bg-red-500 hover:text-white hover:w-72 hover:h-12
            ">
            {props.text}
            </button>
        );
    }
    return (
        <button className="
            w-72 h-12 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-lg
        ">
        {props.text}
        </button>
    );

}
export default XLargeButton;
