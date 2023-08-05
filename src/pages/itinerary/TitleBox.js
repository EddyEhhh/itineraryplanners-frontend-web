import React from "react";


const TitleBox = (props) => {
    return(
        <div className="Titlebox h-[330px] w-full bg-primary-green pt-6 pl-4 shadow">
            <div className="bg-white h-[80px] rounded-lg shadow-base w-[400px] flex flex-col pt-3 ">
                <input onChange = {props.titleChangeHandler} placeholder="Enter title" value = {`${props.title === "" ? "" : `${props.title}` }`} className="w-80% focus:outline-0 ml-2 font-semibold text-2xl"/>
                <h3 className={"ml-2"}> 15/7/1200 ~ 10/3/5000 </h3>
            </div>
        </div>
    );
}

export default TitleBox;