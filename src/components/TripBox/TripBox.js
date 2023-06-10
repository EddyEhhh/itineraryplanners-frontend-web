import React from "react";
import kr from "../../pages/landing/kr.jpeg";

const TripBox = (props) => {
    return (
      <div className=" h-fit w-[406.5px] flex-col items-center justify-center">
          <div className="relative w-full h-3/4 rounded-md ">
              <img src={kr} className="rounded-md object-fill h-full"/>
          </div>
          <div className="h-fit">
              <div className=" font-semibold">
                  {props.title}
              </div>
              <div>
                  {props.duration}
              </div>
          </div>

      </div>

    );
}

export default TripBox;