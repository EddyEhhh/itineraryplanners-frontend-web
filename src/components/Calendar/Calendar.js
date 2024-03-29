import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Calendar.scss";
import dayjs from "dayjs";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Calendar(props) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const width = `w-[${props.width}px]`;
  const height = `w-[${props.height}px]`;
  //w-[px]
  return (

    <div className={`sm:mb-0 sm:w-[500px] sm:h-[500px] w-[350px] h-[450px] pt-16`}>
      <div>
        <table className="pagination">
          <tbody>
            <tr>
              <td className="col-1">
                <span className="cursor-pointer">
                  <h1>
                    <GrFormPrevious
                      size={25}
                      onClick={() => {
                        setToday(today.month([today.month() - 1]));
                      }}
                    />
                  </h1>
                </span>
              </td>
              <td className="col-2">
                <span>
                  <h1>
                    {months[today.month()]} {today.year()}{" "}
                  </h1>
                </span>
              </td>
              <td className="col-3">
                <span className="cursor-pointer">
                  <GrFormNext
                    size={25}
                    onClick={() => {
                      setToday(today.month([today.month() + 1]));
                    }}
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full grid grid-cols-7">
        {days.map((day, index) => {
          return (
            <h1
              id="days"
              key={index}
              className="h-12 border-b-2 border-black grid place-content-center text-light-gray font-inter"
            >
              {day}
            </h1>
          );
        })}
      </div>
      <div className="grid grid-cols-7">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                id="month"
                key={index}
                className="h-12 grid place-content-center font-inter"
              >
                <h1
                  id="dates-number"
                  style={dateColour(currentMonth, today)}
                  className="h-8 w-8 grid place-content-center rounded-full 
				hover:bg-primary-green hover:text-white transition-all cursor-pointer font-inter"
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.toString()}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

function dateColour(isCurrentMonth, today) {
  if (!isCurrentMonth) {
    return {
      color: "#B2B2B2",
    };
  }
  if (today) {
    return {
      color: "#FF9500",
    };
  }
}

const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  // use current date if no date is passed in
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  // generates dates before first date of month
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: firstDateOfMonth.day(i).format("DD"),
      today: false,
    });
  }

  // generate dates for current month
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i).format("DD"),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  // generate dates after last date of month
  const remaining = 42 - arrayOfDate.length;
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.day(i).format("DD"),
      today: false,
    });
  }

  return arrayOfDate;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
