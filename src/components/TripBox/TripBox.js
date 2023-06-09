import React from "react";
import kr from "../../pages/landing/kr.jpeg";

const TripBox = (props) => {
    return (
      <div className="h-72 w-72 mr-3">
          <div className="relative w-full h-3/4 rounded-md ">
              <img src={kr} className="rounded-md object-fill h-full "/>
          </div>
          <div className=" font-semibold">
              Title
          </div>
          <div>
              Duration
          </div>
      </div>

    );
}

export default TripBox;