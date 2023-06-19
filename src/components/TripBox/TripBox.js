import React from "react";
import kr from "../../pages/landing/kr.jpeg";

const TripBox = (props) => {
    return (
      <div className={`h-fit ${props.width} flex-col items-center justify-center`}>
          <div className="w-full h-3/4 rounded-md">
              <img src={kr} className="rounded-md w-full h-full"/>
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