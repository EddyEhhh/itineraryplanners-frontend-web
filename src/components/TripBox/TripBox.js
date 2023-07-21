import React from "react";
import kr from "../../pages/landing/kr.jpeg";
import {ReactComponent as More} from '../../icons/more-details.svg';


const TripBox = (props) => {
    return (
      <div className={`h-fit ${props.width} flex-col items-center justify-center`}>
          <div className="w-full h-3/4 rounded-md">
              <div style={{position: 'relative', top: 35, float: "right", right: 10}}>
                  <More/>
              </div>
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