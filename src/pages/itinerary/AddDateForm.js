import React from 'react';
import SmallButton from "../../components/RectangleButton/SmallButton/SmallButton";


const AddDateForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        const date = {
            day: 'Day',
            date: 'Date',
            id: props.currentDates.length,
            activityBlock: []
        }
        saveDateHandler(date);
    }

    const saveDateHandler = (enteredDateData) => {
        const dateData = {
            ...enteredDateData,
        };
        props.onAddDate(dateData);
    }

    return (
        <SmallButton onClick = {props.onClick} text ="Add Date" colour = "bg-gray-500" handleClick = {submitHandler}></SmallButton>
    );
}

export default AddDateForm;