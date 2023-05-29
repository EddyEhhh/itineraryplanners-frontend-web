import React from "react";


//  Copy this code and fill in the blanks
// <CircleButton colour='' width ='' height='' text='' link ='' />
export default function CircleButton(props) {
    return (
        //flex justify-center items-center w-10 h-10 rounded-full bg-neutral-200 text-neutral-800
        //<div className={`existing-class ${className}`}>
        <button className = {`flex justify-center items-center rounded-full ${props.colour} text-neutral-800  h-${props.height} w-${props.width}`}>
            {props.link}
        </button>
    );
};

