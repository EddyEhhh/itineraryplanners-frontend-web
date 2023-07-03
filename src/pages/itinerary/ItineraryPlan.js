import React from "react";
import ItinerarySelection from "./ItinerarySelection";

const ItineraryPlan = () => {
    return (
        <div>
            <div className="Titlebox h-[330px] w-full bg-primary-green pt-6 pl-4 shadow">
                <div className="bg-white h-[80px] rounded-lg shadow-base w-[400px] flex flex-col pt-3 ">
                    <input placeholder="Enter title" className="w-80% focus:outline-0 ml-2 font-semibold text-2xl"/>
                    <h3 className={"ml-2"}> 15/7/1200 ~ 10/3/5000 </h3>
                </div>
            </div>

            <ItinerarySelection></ItinerarySelection>


            <div className= "outline h-[900px] rounded-lg shadow-base ">

            </div>
        </div>

    );

}

export default ItineraryPlan;