import React from 'react';


const ItineraryActivityBlock = (props) => {
    return (
        <div className="h-52 w-[500px] outline">
            <div className="title">
                <h1>{props.title}</h1>
                <h2>{props.duration} duration </h2>
            </div>
            <div>
                <h2>{props.arrival} drr </h2>
                <h2>{props.departure} dep </h2>
            </div>

            <div>
                <h2>{props.accommodation} acc </h2>
                <h2>{props.flight} flight </h2>
            </div>

        </div>

    );
}



export default ItineraryActivityBlock;