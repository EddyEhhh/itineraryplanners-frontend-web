import React from 'react';
import {useDraggable} from "@dnd-kit/core";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

const ItineraryActivityBlock = (props) => {
    //
    // if (props.type === 'activity' ) {
    //         console.log("hi");
    // }
    // const {attributes, listeners, setNodeRef, transform} = useDraggable({
    //     id: props.id,
    // });
    // const style = transform ? {
    //     transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    // } : undefined;

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <button className="flex flex-row justify-between  pl-5 pt-3 pb-3  h-56 mt-10 md:w-[1300px] shadow-xl-inner rounded-xl bg-[#f4f4f4]"
             ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <div className= "left-section font-bold ">
                <div className="title flex justify-start">
                    <h1 className="text-black">{props.title}</h1>
                </div>

                <div className="text-[#808080]">
                    <h2>{props.duration} Duration: </h2>
                    <h2>{props.arrival} Arrival: </h2>
                    <h2>{props.departure} Departure: </h2>
                </div>

                <div className="text-[#808080]">
                    <h2>{props.accommodation} Accommodation: </h2>
                    <h2>{props.flight} Flight: </h2>
                </div>
            </div>

            <div className="right-section pl-5 pt-3 flex flex-row justify-between  mr-5 rounded-xl right-section h-full md:w-1/2 bg-[#E9ECEF] ">
                <div>
                    comments
                </div>
                <div className=" w-1/2 rounded-r-xl mr-3 mb-3">
                    Insert Picture
                </div>

            </div>

        </button>

    );
}



export default ItineraryActivityBlock;