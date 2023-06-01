import React    from "react";
import template from "./SmallButton.jsx";
function SmallButton(props) {
    if (props.hover == "true") {
        return (
            <div className>
                <button className="
                    w-1 h-1 flex items-center justify-center rounded-full bg-transparent font-semibold text-red-500 text-sm
                    hover:transition-all ease-in duration-300 hover:bg-red-500 hover:text-white hover:w-32 hover:h-8
                ">
                {props.text}
                </button>
            </div>
        );
    }

    return (
        <div className>
            <button className="
                w-24 h-8 flex items-center justify-center rounded-full bg-red-500 font-semibold text-white text-sm
            ">
                {props.text}
            </button>
        </div>
    );

}
export default SmallButton;
