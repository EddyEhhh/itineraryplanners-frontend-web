import React, {Suspense, useEffect} from "react";
import ItinerarySelection from "./ItinerarySelection";
import ItineraryActivityBlock from "./ItineraryActivityBlock";
import {useState} from "react";
import ItineraryActivityForm from "./ItineraryActivityForm";
import DateBlock from "./DateBlock";
import AddDateForm from "./AddDateForm";
import {useLocation, useSearchParams} from "react-router-dom";
import TypeOfItineraryButton from "./TypeOfItineraryButton";
import TitleBox from "./TitleBox";



import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';

import {
    restrictToVerticalAxis,
    restrictToParentElement,
} from '@dnd-kit/modifiers';

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TestBlock from "./TestBlock";
import {getLatestTrip, getTripDetails} from "../../services/TripService";
import {useAuth} from "../../contexts/AuthContext";


const ItineraryPlan = () => {
    //gets state from newTripModal
    const from = useLocation();


    const [dates, setDate] = useState([]);
    const [dateId, setDateId] = useState(0);
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


    const [searchParams, setSearchParams] = useSearchParams();
    const tripId = searchParams.get('id');

    const [tripData, setTripData] = useState({
        id: 0,
        title: "",
        location: "",
        startDate: "",
        endDate: "",
        currency: "",
        totalBudget: 0.0,
        pictureLink: "",
        lastUpdate: "",
        itinerarys: []
    });

    const updateTripData = (key, value) => {
        setTripData(prev => ({
            ...prev,
            [key] : value
        }));
    }

    const { account } = useAuth();

    const username = account?.username;

    const [dataLoaded, setDataLoaded] = useState(false); // Add dataLoaded state

    useEffect( () => {
        getTripDetails(username, tripId)
            .then(res => {
                console.log("RES:" + res.data.title);
                res.data.startDate = new Date(res.data.startDate);
                res.data.endDate = new Date(res.data.endDate);
                setTripData(res.data);
                // setTripData((prevTrip) => {
                //     return [...prevTrip, tripData];
                // });
                setDataLoaded(true)// Data has been loaded successfully
                console.log(tripData);
                setActivity(res.data.itinerarys);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (dataLoaded) {
            extractDates(dates); // Call extractDates only when dataLoaded is true
            // console.log("DATE SIZE2: " + dates[0].day);
            setDateId(dates[0].id)
            console.log("Selected ID: " + dates[0].id);
        }
    }, [dataLoaded]);

    const extractDates = (dates) => {
        setDate([]);
        let count = 0;
        while (tripData.startDate <= tripData.endDate) {
            // console.log("TYPE 4: " + tripData.startDate + " | " + tripData.endDate);
            const newDate = {
                day: days[tripData.startDate.getDay()],
                date: tripData.startDate.getDate() + " " + months[tripData.startDate.getMonth()],
                year: tripData.startDate.getFullYear() + "",
                id: tripData.itinerarys[dates.length].id,
                activityBlock: []
            }
            // console.log("RUNCOUNT: " + count++);
            // console.log("DATE SIZE: " + dates.length);
            // console.log("Itinerary id: " + tripData.itinerarys[dates.length].id);
            addDateHandler(newDate);
            dates.push(newDate);
            // console.log("Current Date:" + )
            // updateTripData('startDate', tripData.startDate.getDate() + 1);
            tripData.startDate.setDate(tripData.startDate.getDate() + 1);
        }


    }

    const getDateId = () => {
        const index = dates.findIndex(date => {
            return date.id == dateId;
        });
        return index;
    }



    //
    // useEffect(() => {
    //
    // }, [])


    //this changes the display
    const changeStateHandler = (x) => {
        console.log("Selecting id: " + x.id);
        setDateId(x.id);
        setActivity(x.activityBlock);
    }

    const [activity, setActivity] = useState([]);
    //adds activity to state
    const addActivityHandler = (ActivityBlock) => {

        setActivity((prevActivity) => {
            const x = [...dates[getDateId()].activityBlock, ActivityBlock];
            //adds activity to the date itself
            addActivityToDate(x);
            return x;
        });
    }
    const addActivityToDate = (activity) => {


        dates[getDateId()].activityBlock = activity;
    }
    const addDateHandler = (dateValues) => {
        setDate((prevDate) => {
            changeStateHandler(dateValues);
            return [...prevDate, dateValues];
        });
    }
    const deleteActivityHandler = (ActivityBlock) => {
        setActivity(() => {
            const x = [...activity];
            const index = activity.findIndex(objects => {
                return objects.id == ActivityBlock.id;
            });

            x.splice(index, 1);
            addActivityToDate(x);
            console.log(activity);
            return x;
        })
    }


    //TITLE FOR TRIP
    const [title, setTitle] = useState(tripData.title);
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const onCommentChangeHandler = (comment, ActivityID) => {
        setActivity(() => {
            const x = [...activity];
            const index = activity.findIndex(objects => {
                return objects.id == ActivityID;
            });

            x[index].note = comment;
            addActivityToDate(x);
            return x;
        })
    }


    const [typeOfActivity, setTypeOfActivity] = useState("activity");

    const changeToActivityHandler = () => {
        setTypeOfActivity("activity");
    }
    const changeToFlightHandler = () => {
        setTypeOfActivity("flight");
    }
    const changeToAccommodationHandler = () => {
        setTypeOfActivity("accommodation");
    }


    const [selectItinerary, setSelectItinerary] = useState(true);
    const [selectFlight, setSelectFlight] = useState(false);
    const [selectAccommodation, setSelectAccommodation] = useState(false);

    const itineraryFilterHandler = (selection) => {
        if (selection === "itinerary" && selectItinerary === false) {
            setSelectItinerary(true);
            setSelectAccommodation(false);
            setSelectFlight(false);
        } else if (selection === "flight"  && selectFlight === false) {
            setSelectFlight(true);
            setSelectItinerary(false);
            setSelectAccommodation(false);
        } else if (selection === "accommodation" && selectAccommodation === false) {
            setSelectAccommodation(true);
            setSelectItinerary(false);
            setSelectFlight(false);
        }
    }


    function handleDragEnd (event) {
        const {active, over} = event;

        //usecase when deleting to 0 activities
        if (active === null || over === null) {
            return;
        }
        if (selectItinerary == true) {
            // console.log(active.id, over.id);
            //note that over and active ids are the same as activity id, hence we get the position through finding the objects where id == something
            const activeIndex = activity.findIndex(objects => {
                return objects.id == active.id;
            });
            const overIndex = activity.findIndex(objects => {
                return objects.id == over.id;
            });
            if (active.id != over.id) {
                setActivity((activity) => {
                    const x =  arrayMove(activity, activeIndex,overIndex);
                    addActivityToDate(x);
                    return x;
                })
            }
        }


    }
    return (
        <Suspense>
        <div className= "pb-10">
            <TitleBox titleChangeHandler={titleChangeHandler} title ={title}></TitleBox>
            <ItinerarySelection itineraryFilter = {itineraryFilterHandler}></ItinerarySelection>

            <div className="flex flex-row w-full shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] rounded-xl">
                <div className= "rounded-l-xl w-2/12 h-[900px] overflow-hidden scrollbar-hide overflow-y-auto">
                        {
                            dates.map((data) =>
                            <DateBlock currentId = {dateId} data = {data.id} amountOfActivity = {data.activityBlock.length}  day = {data.day} date = {data.date}
                            onClick = {() => {changeStateHandler(data)}}/>)
                        }
                    <div className="items-center justify-center flex mt-5">
                        <AddDateForm currentDates = {dates} onAddDate = {addDateHandler}></AddDateForm>
                    </div>
                </div>

                <DndContext modifiers={[restrictToParentElement]} onDragEnd={handleDragEnd}>
                    <SortableContext items={activity} strategy={verticalListSortingStrategy}>
                        <div className= "h-[900px] flex flex-col items-center space-y-5 rounded-r-xl w-10/12 overflow-hidden scrollbar-hide overflow-y-scroll">
                            {selectFlight && activity.filter((ActivityBlock) => ActivityBlock.typeOfActivity === "flight").map((ActivityBlock) =>
                                <ItineraryActivityBlock adjust={false} key={ActivityBlock.id} id={ActivityBlock.id} note = {ActivityBlock.note} type={ActivityBlock.typeOfActivity}  title = {ActivityBlock.title}/>)}

                            {selectAccommodation && activity.filter((ActivityBlock) => ActivityBlock.typeOfActivity === "accommodation").map((ActivityBlock) =>
                                <ItineraryActivityBlock  adjust={false} key={ActivityBlock.id} id={ActivityBlock.id} note = {ActivityBlock.note}  type={ActivityBlock.typeOfActivity}  title = {ActivityBlock.title}/>)}

                            {selectItinerary && activity.map((ActivityBlock) =>
                                <ItineraryActivityBlock onCommentChange = {onCommentChangeHandler} onPointerDown = {() => deleteActivityHandler(ActivityBlock)} key={ActivityBlock.id} id={ActivityBlock.id} type={ActivityBlock.typeOfActivity} note = {ActivityBlock.note} title = {ActivityBlock.title}/>)}
                            {selectItinerary &&
                                <div className= "flex flex-row items-center gap-x-2">
                                    <ItineraryActivityForm currentActivity = {activity} currentDate = {dateId} onSaveActivityData = {addActivityHandler} chosenType = {typeOfActivity}></ItineraryActivityForm>
                                    <TypeOfItineraryButton currentTypeOfActivity= {typeOfActivity} activityHandler = {changeToActivityHandler} accommodationHandler = {changeToAccommodationHandler} flightHandler = {changeToFlightHandler}></TypeOfItineraryButton>
                                </div>
                            }
                        </div>
                    </SortableContext>
                </DndContext>
            </div>
        </div>
        </Suspense>

    );

}

export default ItineraryPlan;