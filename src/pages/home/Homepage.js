import React, {useRef} from "react";
import Calendar from "../../components/Calendar";
import kr from "../landing/kr.jpeg";
import MediumButton from "../../components/RectangleButton/MediumButton/MediumButton";
import TripBox from "../../components/TripBox/TripBox";


export function Homepage() {
  return (
    <div>
            <div className = "w-full h-[500px] flex items-center">
                <div>
                    <Calendar></Calendar>
                </div>

                <div className="bg-white shadow-md ml-5 rounded-2xl w-full h-[450px] ">
                    {/* header */}
                    <div className= "overflow-hidden h-48 rounded-t-2xl relative font-bold">
                        <div className= "absolute bg-white m-5 drop-shadow-5xl w-1/4 rounded-2xl h-14 flex justify-center items-center text-lg">
                            Trip to South Korea
                        </div>
                        <img  className= "object-contain rounded-t-2xl " src = {kr}/>
                    </div>

                    {/* body */}
                    <div className = "pl-8 pr-8 pt-2">
                        <div className="flex justify-between items-center h-10 font-bold ">
                            <div className={"w-fit"}>Details</div>
                            <div className={"w-fit"}>15 June ~ 18 June</div>
                        </div>

                        <div className=" h-40 w-full pt-2">
                            <div className= "font-semibold">
                                Location1 to Location2 - SQ 54032
                            </div>
                            <div className= "font-sm opacity-90 text-base">
                                Jun 15, 1:45 - 8:55am (6hours 10mins)
                            </div>

                            <div className="font-semibold pt-5">
                                Who's going
                            </div>
                            <div className="opacity-90 text-base">
                                Me,Sis,Bro,Mum,Dad (6pax)
                            </div>
                        </div>

                        <div className="font-semibold">
                            5 activities planned
                        </div>
                    </div>

                </div>
            </div>




            <div className=" h-72 flex-col">
                <div className= "flex justify-between items-center">
                    <div className="h-10 font-bold text-2xl ">
                        Upcoming trips
                    </div>

                    <div className="h-12 flex justify-center items-center">
                        <MediumButton  text = "Create new trip" hover = "" colour = "primary-green" disabled = "" route = ""/>
                    </div>
                </div>


                <div className="flex mt-5 overflow-x-clip  overflow-hidden">
                    <div className="flex ">
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>
                        <TripBox></TripBox>

                    </div>



                </div>

            </div>
    </div>

  );
}


export default Homepage;
