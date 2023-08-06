import React from 'react';
import {useState} from "react";

const ItineraryActivityForm = (props) => {
    const [title, setTitle] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    //saveActivityHandler adds it to array, and saves it to the array in

    //handles when data is submitted, adds data to a new object passes it to saveActivityHandler
    const submitHandler = (event) => {
        event.preventDefault();
        const activityData = {
            title: title,
            typeOfActivity: props.chosenType, //activity accommodation flight
            note: '',
            picture:'',
            id: props.currentActivity.length + "",
            flight: null,
            accommodation: null
        }

        // if (activityData.typeOfActivity === "flight") {
        //     const additionalDate = {
        //
        //     }
        //     activityData = [...activityData, additionalDate];
        // }
        props.onSaveActivityData(activityData);
        setTitle('');
    }

    return (
      <form onSubmit = {submitHandler}>
        <input className="pl-2 mt-5 mb-5 md:w-[1100px] rounded-lg h-12 border-2   placeholder-slate-500 placeholder:font-sm"
               value={title}
               placeholder= "Add new location"
               onChange={titleChangeHandler}/>
      </form>
    );
}

export default ItineraryActivityForm;