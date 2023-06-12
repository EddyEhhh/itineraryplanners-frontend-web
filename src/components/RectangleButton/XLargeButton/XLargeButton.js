import React from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import styles from "./XLargeButton.scss"

//w-72 h-12
function XLargeButton(props) {
    const navigate = useNavigate();
    let colour = `${props.colour}`;
    let border = `${props.border}`;
    const { t, i18n } = useTranslation('landing');
    return (
        <button 
        id="x-large-button"
        className=
            {`flex items-center justify-center rounded-full text-lg font-semibold 
                ${props.hover === "true" ? `w-32 h-8  bg-transparent text-${props.textColour} 
                hover:transition-all ease-in duration-200 hover:${colour} hover:text-white hover:w-72 hover:h-12` 
                : `w-72 h-12 text-${props.textColour}
                ${border === "" ? `bg-${colour}`:`bg-transparent border-2 border-${props.border} text-black`} 
                ${props.disabled === "true" ? `opacity-50` : ``}
                `}
            `}
            onClick={() => navigate(`${props.route}`)}>
            {t(`${props.text}`)}
        </button>
    );
}

export default XLargeButton;