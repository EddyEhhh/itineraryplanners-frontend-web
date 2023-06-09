import React from "react";
import {useNavigate} from "react-router-dom";

//w-64 h-10
function LargeButton(props) {
    const navigate = useNavigate();
    let colour = `${props.colour}`;
    return (
        <div className>
            <button className=
                {`flex items-center justify-center rounded-full text-lg font-semibold 
                    ${props.hover === "true" ? `w-32 h-10 bg-transparent text-red-500 
                    hover:transition-all ease-in duration-200 hover:bg-${colour} hover:text-white hover:w-64 hover:h-10` 
                    : `text-${props.text-colour} w-64 h-10 bg-${colour} ${props.disabled === "true" ? `opacity-50` : ``}
                    `}
                `}
            onClick={() => navigate(`${props.route}`) }>
                {props.text}
            </button>
        </div>
    );
}

export default LargeButton;