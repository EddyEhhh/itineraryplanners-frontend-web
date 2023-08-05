import React from "react";

const TypeOfItineraryButton = (props) => {
    return (
        <div className="font-semibold gap-x-4">
            <button className={`w-10 h-10 rounded-full ${props.currentTypeOfActivity == "activity" ? "outline outline-violet-300" : ""}`} onClick={props.activityHandler}> ACT </button>
            <button className={`w-10 h-10 rounded-full ${props.currentTypeOfActivity == "flight" ? "outline outline-violet-300" : ""}`} onClick={props.flightHandler}> FLI </button>
            <button className={`w-10 h-10 rounded-full ${props.currentTypeOfActivity == "accommodation" ? "outline outline-violet-300" : ""}`} onClick={props.accommodationHandler}> ACC </button>
        </div>
    );
}

export default TypeOfItineraryButton;