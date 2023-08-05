import React from "react";
import { useState } from "react";
import itineraryPlan from "./ItineraryPlan";


const ItinerarySelection = (props) => {
    const [Itinerary, setItinerary] = useState(true);
    const [Accommodation, setAccommodation] = useState(false);
    const [Flights, setFlights] = useState(false);

    const ItineraryOnClickHandler = () => {
        if (Itinerary === false) {
            setItinerary(!Itinerary);
            props.itineraryFilter("itinerary");
            setFlights(false);
            setAccommodation(false);
        }

        // console.log(Itinerary, Accommodation, Flights)
    }
    const AccommodationOnClickHandler = () => {
        if (Accommodation === false) {
            setAccommodation(!Accommodation);
            props.itineraryFilter("accommodation");
            setFlights(false);
            setItinerary(false);
        }
    }

    const FlightsOnClickHandler = () => {
        if (Flights === false) {
            setFlights(!Flights);
            props.itineraryFilter("flight");
            setItinerary(false);
            setAccommodation(false);
        }
    }



    return (
        <div className="text-center font-bold  m-10 flex flex-row justify-center ">
            {!Itinerary &&
                <button className="border-b-[2px] border-primary-green pr-2 pl-2 hover:text-primary-orange hover:border-primary-orange transition ease-in-out duration-200"
                        onClick={ItineraryOnClickHandler}
                >
                ITINERARY
                </button>}
            {Itinerary &&
                <button className="border-b-[2px] border-primary-orange text-primary-orange pr-2 pl-2 "
                        onClick={ItineraryOnClickHandler}>
                ITINERARY
                </button>}

            {!Accommodation && <button className=" border-b-[2px] border-primary-green pr-2 pl-2 hover:border-primary-orange hover:text-primary-orange transition ease-in-out duration-200"
                onClick={AccommodationOnClickHandler}>
                ACCOMMODATION
            </button>}
            {Accommodation && <button className=" border-b-[2px] border-primary-green pr-2 pl-2 border-primary-orange text-primary-orange"
                onClick={AccommodationOnClickHandler}>
                ACCOMMODATION
            </button>}

            {!Flights && <button className="border-b-[2px] border-primary-green pr-2 pl-2 hover:border-primary-orange hover:text-primary-orange transition ease-in-out duration-200"
                onClick={FlightsOnClickHandler}>
                FLIGHTS
            </button>}
            {Flights && <button className="border-b-[2px] border-primary-orange text-primary-orange pr-2 pl-2 "
                onClick={FlightsOnClickHandler}>
                FLIGHTS
            </button>}
        </div>
    );
}

export default ItinerarySelection;