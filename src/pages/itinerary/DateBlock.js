import React from 'react';


const DateBlock = (props) => {

    const addDateHandler = () => {

    }
    return (
        <button className=" outline w-full h-28 flex flex-col justify-center items-start pl-5">
            <div>
                <div className="mb-4 flex flex-row  font-bold text-lg items-center justify-center">
                    <p>{props.date},</p>
                    <p>{props.day}</p>
                </div>
                <div className="flex flex-col">
                    <p>{props.location} location </p>
                    <p>{props.amountOfActivity} amount of activity</p>
                </div>
            </div>

        </button>

    );
}



export default DateBlock;