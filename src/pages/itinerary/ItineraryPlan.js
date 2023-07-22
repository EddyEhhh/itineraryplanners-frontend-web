import React, {Suspense} from "react";
import ItinerarySelection from "./ItinerarySelection";
import ItineraryActivityBlock from "./ItineraryActivityBlock";
import {useState} from "react";
import ItineraryActivityForm from "./ItineraryActivityForm";
import DateBlock from "./DateBlock";
import AddDateForm from "./AddDateForm";
import {useLocation} from "react-router-dom";
const ItineraryPlan = (props) => {
    //gets state from newTripModal
    const from = useLocation();
    console.log(from.state);

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
            day: '',
            date: '',
            id: 0,
            activityBlock: ActivityBlock
        }
    ]

    const Trip = [
        {
            dates: dateValues,
            id: 0
        }
    ]
    const [dates, setDate] = useState([]);
    const [dateId, setDateId] = useState(0);

    const changeStateHandler = (x) => {
        setDateId(x.id);
        // console.log(x.id);
        setActivity(x.activityBlock);
    }
    const [activity, setActivity] = useState([]);

    //adds activity to state
    const addActivityHandler = (ActivityBlock) => {
        setActivity((prevActivity) => {
            const x = [...dates[dateId].activityBlock, ActivityBlock];
            //adds activity to the date itself
            addActivityToDate(x);
            return x;
        });
    }

    const addActivityToDate = (activity) => {
        dates[dateId].activityBlock = activity;
        // console.log(dates[dateId]);
    }
    const addDateHandler = (dateValues) => {
        setDate((prevDate) => {
            changeStateHandler(dateValues);
            return [...prevDate, dateValues];
        });

    }

    return (
        <Suspense>
        <div>
            <div className="Titlebox h-[330px] w-full bg-primary-green pt-6 pl-4 shadow">
                <div className="bg-white h-[80px] rounded-lg shadow-base w-[400px] flex flex-col pt-3 ">
                    <input placeholder="Enter title" value = {`${from.state.title === "" ? '' : `Trip to ${from.state.title}` }`} className="w-80% focus:outline-0 ml-2 font-semibold text-2xl"/>
                    <h3 className={"ml-2"}> 15/7/1200 ~ 10/3/5000 </h3>
                </div>
            </div>

            <ItinerarySelection></ItinerarySelection>
            <div className="flex flex-row w-full">
                <div className= "w-2/12 outline">
                    {dates.map((dateValues) =>
                        <DateBlock data = {dateValues.id} amountOfActivity = {dateValues.activityBlock.length}  day = {dateValues.day} date = {dateValues.date}
                        onClick = {() => {changeStateHandler(dateValues)}}/>)
                    }
                    <div className="items-center justify-center flex mt-5">
                        <AddDateForm currentDates = {dates} onAddDate = {addDateHandler}></AddDateForm>
                    </div>
                </div>

                <div className= "h-[900px] rounded-lg shadow-2xl w-10/12">
                    {activity.map((ActivityBlock) =>
                        <ItineraryActivityBlock title = {ActivityBlock.title}/>)
                    }
                    <ItineraryActivityForm currentDate = {dateId} onSaveActivityData = {addActivityHandler}></ItineraryActivityForm>
                </div>
            </div>

        </div>
        </Suspense>

    );

}

export default ItineraryPlan;