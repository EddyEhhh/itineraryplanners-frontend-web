import React from 'react';
import {useState} from "react";


const ItineraryActivityForm = (props) => {
    const [title, setTitle] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    //saveActivityHandler adds it to array, and saves it to the array in
    const saveActivityHandler = (enteredActivityData) => {
        const activityData = {
            ...enteredActivityData,
            id: Math.random().toString(),
        };
        props.onSaveActivityData(activityData);
    }


    //handles when data is submitted, adds data to a new object passes it to saveActivityHandler
    const submitHandler = (event) => {
        event.preventDefault();
        const activityData = {
            title: title
        }
        saveActivityHandler(activityData);
        setTitle('');
    }


    return (
      <form onSubmit = {submitHandler}>
        <input className="outline"
               value={title}
               onChange={titleChangeHandler}/>
      </form>
    );


}

export default ItineraryActivityForm;