import React from "react";
import kr from "../../pages/landing/kr.jpeg";
// import {ReactComponent as More} from '../../icons/more-details.svg';


const TripBox = (props) => {

    new Date(props.data.startDate)
    new Date(props.data.endDate)

    const MONTH =
        ['Jan', 'Feb', 'Mar'
        , 'Apr', 'May', 'Jun'
        , 'Jul', 'Aug', 'Sept'
        , 'Oct', 'Nov', 'Dec']

    const getStartEndDate = (startDate, endDate) =>{
        var splitStartDate = startDate.split('-');
        var startYear = splitStartDate[0]
        var startMonth = MONTH[parseInt(splitStartDate[1])]
        var startDay = splitStartDate[2]

        var splitEndDate = endDate.split('-');
        var endYear = splitEndDate[0]
        var endMonth = MONTH[parseInt(splitEndDate[1])]
        var endDay = splitEndDate[2]

        if(startYear === endYear && startMonth === endMonth && startDay === endDay){
            return startDay + " " + startMonth + " " +startYear;
        }

        if(startYear === endYear && startMonth === endMonth){
            return startDay + " - " + endDay + " " + endMonth + " " + endYear ;
        }

        if(startYear === endYear){
            return startDay + " " + endMonth + " - " + endDay + " " + endMonth + " " + endYear ;
        }

        return startDay + " " + startMonth + " " + startYear + " - " + endDay + " " + endMonth + " " + endYear;



    }

    return (
      <div className={`h-fit ${props.width} flex-col items-center justify-center`} key={props.key}>
          <div className="w-full h-3/4 rounded-md">
              {/*<div style={{position: 'relative', top: 35, float: "right", right: 10}}>*/}
              {/*    <More/>*/}
              {/*</div>*/}
              <img src={kr} className="rounded-md w-full h-full"/>
          </div>
          <div className="h-fit">
              <div className=" font-semibold">
                  {props.data.title}
              </div>
              <div>
                  {getStartEndDate(props.data.startDate, props.data.endDate)}
              </div>
          </div>

      </div>

    );
}

export default TripBox;