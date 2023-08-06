import React, {useState} from 'react';
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';
import {HomeModernIcon} from "@heroicons/react/24/solid";
import {RocketLaunchIcon} from "@heroicons/react/24/solid";
import {ShoppingBagIcon} from "@heroicons/react/24/solid";
import {TrashIcon} from "@heroicons/react/24/solid";
import {Bars3Icon} from "@heroicons/react/24/solid";

const ItineraryActivityBlock = (props) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});



    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const [comment, setComment] = useState(props.note);
    const commentChangeHandler = (event) => {
        setComment(event.target.value);
        props.onCommentChange(event.target.value, props.id);
    }


    if (props.type === "flight") {
        return (
            <div className="relative flex flex-row flex-none justify-between  pl-5 pt-3 pb-3  md:h-56 mt-10 md:w-[1300px] shadow-xl-inner rounded-xl bg-[#f4f4f4]"
                 ref={props.adjust == false ? null : setNodeRef} style={style}  {...attributes}>


                <div className= " left-section font-bold ">
                    <div className="title flex justify-start">
                        <h1 className="text-black">{props.title}</h1>
                    </div>
                    <div  className="absolute w-8 pt-6 -ml-10 h-[300px] text-blue-500 rounded-full ">
                        <RocketLaunchIcon></RocketLaunchIcon>
                    </div>
                    <div className="text-[#808080]">
                        <h2>{props.checkIn} Arrival Date: </h2>
                        <h2>{props.checkOut} Departure-Date: </h2>
                        <h2>{props.phone} Flight-Number: </h2>
                    </div>
                </div>


                <div className="right-section mr-8 pl-5 pt-3 flex flex-row justify-between  mr-5 rounded-xl right-section h-full md:w-1/2 bg-[#E9ECEF] ">
                     <textarea className={"w-40 bg-transparent border-none h-full flex justify-start "}
                               rows="4"
                               cols="50"
                               value={comment}
                               placeholder="Add comment"
                               style={{ resize: 'none', border: 'none' }}
                               disabled={props.adjust == false ? true : false}
                               onChange={commentChangeHandler}></textarea>
                    <div className=" w-1/2 rounded-r-xl mr-3 mb-3">
                        Insert Picture
                    </div>
                    <button ref={setActivatorNodeRef} {...listeners} className="absolute w-20 -mt-4 ml-[660px] ">
                        <Bars3Icon className="w-6 text-gray-700"></Bars3Icon>
                    </button>
                    <button onPointerDown={props.onPointerDown} className=" absolute w-20 mt-40 ml-[660px] ">
                        <TrashIcon className="w-6 text-gray-700"></TrashIcon>
                    </button>

                </div>

            </div>
        )
    } else if (props.type === "accommodation") {
        return (
            <div className="relative flex flex-row flex-none justify-between  pl-5 pt-3 pb-3  md:h-56  mt-10 md:w-[1300px] shadow-xl-inner rounded-xl bg-[#f4f4f4]"
                    ref={props.adjust == false ? null : setNodeRef} style={style} {...attributes}>
                <div className= "left-section font-bold ">
                    <div className="title flex justify-start">
                        <h1 className="text-black">{props.title}</h1>
                    </div>

                    <div className="absolute w-8 pt-6 -ml-10 h-[300px] text-blue-500 rounded-full ">
                       <HomeModernIcon></HomeModernIcon>
                    </div>

                    <div className="text-[#808080]">
                        <h2>{props.checkIn} Check-In: </h2>
                        <h2>{props.checkOut} Check-Out: </h2>
                        <h2>{props.phone} Phone: </h2>
                        <h2>{props.type}</h2>
                    </div>
                </div>

                <div className="right-section mr-8 pl-5 pt-3 flex flex-row justify-between  mr-5 rounded-xl right-section h-full md:w-1/2 bg-[#E9ECEF] ">
                     <textarea className={"w-40 bg-transparent border-none h-full flex justify-start "}
                               rows="4"
                               cols="50"
                               value={comment}
                               placeholder="Add comment"
                               style={{ resize: 'none', border: 'none' }}
                               disabled={props.adjust == false ? true : false}
                               onChange={commentChangeHandler}></textarea>
                    <div className=" w-1/2 rounded-r-xl mr-3 mb-3">
                        Insert Picture
                    </div>
                    <button ref={setActivatorNodeRef} {...listeners} className="absolute w-20 -mt-4 ml-[660px] ">
                        <Bars3Icon className="w-6 text-gray-700"></Bars3Icon>
                    </button>
                    <button onPointerDown={props.onPointerDown} className=" absolute w-20 mt-40 ml-[660px] ">
                        <TrashIcon className="w-6 text-gray-700"></TrashIcon>
                    </button>
                </div>
            </div>
        )
    } else
    return (
        <div className="relative flex flex-row  flex-none justify-between  pl-5 pt-3 pb-3 md:h-56 mt-10 md:w-[1300px] shadow-xl-inner rounded-xl bg-[#f4f4f4]"
             ref={setNodeRef} style={style} {...attributes}>
            <div className= "left-section font-bold ">
                <div className="title flex justify-start">
                    <h1 className="text-black">{props.title}</h1>
                </div>

                <div className="absolute w-8 pt-6 -ml-10 h-[300px] text-blue-500 rounded-full ">
                    <ShoppingBagIcon></ShoppingBagIcon>
                </div>

                <div className="text-[#808080]">
                    <h2>{props.duration} Duration: </h2>
                    <h2>{props.arrival} Arrival: </h2>
                    <h2>{props.departure} Departure: </h2>
                </div>

            </div>

            <div className="right-section mr-8 pl-5 pt-3 flex flex-row justify-between mr-5 rounded-xl right-section h-full md:w-1/2 bg-[#E9ECEF] ">
                    <textarea className={"w-40 bg-transparent border-none h-full flex justify-start "}
                              rows="4"
                              cols="50"
                              value={comment}
                              placeholder="Add comment"
                              style={{ resize: 'none', border: 'none' }}
                              disabled={props.adjust == false ? true : false}
                              onChange={commentChangeHandler}></textarea>

                <div className=" w-1/2 rounded-r-xl mr-3 mb-3"> Insert Picture </div>
                <button ref={setActivatorNodeRef} {...listeners} className="absolute w-20 -mt-4 ml-[660px] ">
                    <Bars3Icon className="w-6 text-gray-700"></Bars3Icon>
                </button>
                <button onPointerDown={props.onPointerDown} className=" absolute w-20 mt-40 ml-[660px] ">
                    <TrashIcon className="w-6 text-gray-700"></TrashIcon>
                </button>
            </div>
        </div>
    );
}



export default ItineraryActivityBlock;