import React from 'react';
import SmallButton from "../../components/RectangleButton/SmallButton/SmallButton";


const AddDateForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        const currentYear = props.currentDates[props.currentDates.length - 1].year;
        const currentDate = props.currentDates[props.currentDates.length - 1].date;
        const latestDate = new Date(Date.parse(`${currentDate} ${currentYear}`));
        latestDate.setDate(latestDate.getDate() + 1);

        const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

        const date = {
            day: days[latestDate.getDay()],
            date: latestDate.getDate() + " " + months[latestDate.getMonth()],
            year: latestDate.getFullYear(),
            id: props.currentDates.length,
            activityBlock: []
        }

        saveDateHandler(date);
    }

    const saveDateHandler = (enteredDateData) => {
        props.onAddDate(enteredDateData);
    }

    return (
        <div className= "mb-4">
            <SmallButton onClick = {props.onClick} text ="Add Date" colour = "bg-gray-500" handleClick = {submitHandler}></SmallButton>
        </div>
    );
}

export default AddDateForm;