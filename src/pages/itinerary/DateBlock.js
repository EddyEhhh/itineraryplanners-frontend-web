import React from 'react';


const DateBlock = (props) => {


    return (
        <div>
            <button
                className={` ${props.currentId === props.data ? "border-r-4 border-r-primary-orange" : ""}
                transition: duration-200 focus:border-r-4  border-b-2 border-r-2 w-full h-32 flex flex-col justify-center items-start pl-5`}
                onClick = {props.onClick}
            >
                <div>
                    <div className="mb-4 flex flex-row font-bold text-lg items-center justify-center">
                        <p>{props.date},</p>
                        <p>{props.day}</p>

                    </div>
                    <div className="flex flex-col">
                        <p>{props.location} location </p>
                        <p>{props.amountOfActivity} Activities </p>
                    </div>
                </div>

            </button>
        </div>


    );
}



export default DateBlock;