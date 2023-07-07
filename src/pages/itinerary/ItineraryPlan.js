import React, {Suspense} from "react";
import ItinerarySelection from "./ItinerarySelection";
import ItineraryActivityBlock from "./ItineraryActivityBlock";
import {useState} from "react";
import ItineraryActivityForm from "./ItineraryActivityForm";
import DateBlock from "./DateBlock";
import AddDateForm from "./AddDateForm";
const ItineraryPlan = () => {

    const ActivityBlock = [
        {
            title: '',
            arrival: '',
            departure:'',
            accommodation:'',
            duration:'',
            flight:'',
        }
    ]

    const dateValues = [
        {
            day: 'Thursday',
            date: '15 August',
            activityBlock: ActivityBlock
        }
    ]

    const [activity, setActivity] = useState([]);
    const [dates, setDate] = useState(dateValues);
    const addActivityHandler = (ActivityBlock) => {
        setActivity((prevActivity) => {
            return [...prevActivity, ActivityBlock];
        });
    }
    const addDateHandler = (dateValues) => {
        setDate((prevDate) => {
            return [...prevDate, dateValues];
        });
    }

    return (
        <Suspense>

        <div>
            <div className="Titlebox h-[330px] w-full bg-primary-green pt-6 pl-4 shadow">
                <div className="bg-white h-[80px] rounded-lg shadow-base w-[400px] flex flex-col pt-3 ">
                    <input placeholder="Enter title" className="w-80% focus:outline-0 ml-2 font-semibold text-2xl"/>
                    <h3 className={"ml-2"}> 15/7/1200 ~ 10/3/5000 </h3>
                </div>
            </div>

            <ItinerarySelection></ItinerarySelection>
            <div className="flex flex-row w-full">
                <div className= "w-2/12 outline">
                    {dates.map((dateValues) => <DateBlock day = {dateValues.day} date = {dateValues.date}></DateBlock>)}
                    <div className="items-center justify-center flex mt-5">
                        <AddDateForm onAddDate = {addDateHandler}></AddDateForm>
                    </div>
                </div>
                <div className= "h-[900px] rounded-lg shadow-2xl w-10/12">
                    {activity.map((ActivityBlock) =>
                        <ItineraryActivityBlock title = {ActivityBlock.title}/>)
                    }
                    <ItineraryActivityForm onSaveActivityData = {addActivityHandler}></ItineraryActivityForm>
                </div>
            </div>

        </div>
        </Suspense>

    );

}

export default ItineraryPlan;