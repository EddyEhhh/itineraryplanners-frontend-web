import React from "react";
import {useNavigate} from "react-router-dom";

//w-72 h-12
function XLargeButton(props) {
    const navigate = useNavigate();
    let colour = `${props.colour}`;
    return (
        <button className=
            {`flex items-center justify-center rounded-full text-lg font-semibold
                ${props.hover === "true" ? `w-32 h-8  bg-transparent text-${props.textColour}
                hover:transition-all ease-in duration-200 hover:${colour} hover:text-white hover:w-72 hover:h-12` 
                : `text-white w-72 h-12 bg-${colour} ${props.disabled === "true" ? `opacity-50` : ``}
                `}
            `}
            onClick={() => navigate(`${props.route}`)}>
        {props.text}
        </button>
    );
}

export default XLargeButton;