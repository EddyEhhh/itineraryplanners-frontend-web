import styles from "./NewTripModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import InputBoxWithIcon from "../InputBoxWithIcons/InputBoxWithIcon";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import DatePicker from "tailwind-datepicker-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function NewTripModal(props) {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');




    //sets the value for start and end date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [startDateDisplay, setStartDateDisplay] = useState();
    const [endDateDisplay, setEndDateDisplay] = useState();

    //controls whether calendar opens or not
    const [show, setShow ]= useState(false);
    const [showEndDate, setShowEndDate ]= useState(false);


    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }
    const clickHandler = () => {
        const Trip = {
            id: '0',
            title: location,
            startDate: startDate,
            endDate: endDate
        }
        // console.log(Trip);
       navigate('/itinerary', {state:Trip});
    }



    const options = {
        title: "Calendar",
        inputPlaceholderProp: "Select Dates",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-white dark:bg-gray-800 w-500",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "",
            input: "",
            inputIcon: "",
            selected: "bg-red-500",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: new Date("2023-01-01"),
        language: "en",

    }
    const handleClose = () => {
        setShow(!show);
    }
    const handleEndDateClose = () => {
        setShowEndDate(!showEndDate);
    }

    const handleChangeStartDate = (selectedDate) => {
        setStartDate(selectedDate);
        // console.log(startDate + "start date is ");
        setStartDateDisplay(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
    }
    const handleChangeEndDate = (selectedDate) => {

        setEndDate(selectedDate);
        // console.log(endDate + "end date is ");
        setEndDateDisplay(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
    }
  return (
    <form>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">

          <div id="new-trip-modal" className = "md:w-[600px] md:h-[500px] w-[400px] h-[400px]">
            <div className="corner-element">
              <MediumCircleButton onButtonClick={props.onClose} />
            </div>
            <div id="new-trip-modal-container" className={"flex md:flex-col"}>
              <div className="space-y-3">
                <h1>New Trip</h1>
                  <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-gray-900 dark:text-gray-300">
                          Location
                      </label>
                      <div className="flex justify-center ">

                          <InputBoxWithIcon
                              value={location}
                              onChange={locationChangeHandler}
                              icon={
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      className="w-6 h-6 stroke-slate-500"
                                  >
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                      <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                      />
                                  </svg>
                              }
                              width="w-[512px]"
                              placeholder="Where to?"
                              className="md:w-[100px]"
                          ></InputBoxWithIcon>
                      </div>
                  </div>


                <div id="date-inputs" className="space-y-3 flex-row md:flex-row ">
                    <div>
                        <label htmlFor="date" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-300">
                            Start Date
                        </label>
                        <DatePicker className = "w-[512px] md:w-[100px]" options = {options} onChange={handleChangeStartDate} show={show} setShow = {handleClose}>
                            <InputBoxWithIcon
                                onFocus={handleClose}
                                value = {startDateDisplay}
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6 stroke-slate-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                        />
                                    </svg>
                                }
                                width="w-[246px]"
                                placeholder="Start Date"
                            ></InputBoxWithIcon>
                        </DatePicker>
                    </div>

                    <div>
                        <DatePicker  className ="w-[512px] md:w-[100px] " options = {options} onChange={handleChangeEndDate} show={showEndDate} setShow = {handleEndDateClose}>
                            <label htmlFor="date" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-300">
                                End Date
                            </label>
                            <InputBoxWithIcon
                                onFocus={handleEndDateClose}
                                value = {endDateDisplay}
                              icon={
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6 stroke-slate-500"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                  />
                                </svg>
                              }
                              width="w-[246px]"
                              placeholder="End Date"
                            ></InputBoxWithIcon>
                        </DatePicker>
                    </div>


                  {/*<InputBoxWithIcon*/}
                  {/*    value = {startDate}*/}
                  {/*    onChange = {startDateChangeHandler}*/}
                  {/*  icon={*/}
                  {/*    <svg*/}
                  {/*      xmlns="http://www.w3.org/2000/svg"*/}
                  {/*      fill="none"*/}
                  {/*      viewBox="0 0 24 24"*/}
                  {/*      stroke-width="1.5"*/}
                  {/*      stroke="currentColor"*/}
                  {/*      class="w-6 h-6 stroke-slate-500"*/}
                  {/*    >*/}
                  {/*      <path*/}
                  {/*        stroke-linecap="round"*/}
                  {/*        stroke-linejoin="round"*/}
                  {/*        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"*/}
                  {/*      />*/}
                  {/*    </svg>*/}
                  {/*  }*/}
                  {/*  width="w-[246px]"*/}
                  {/*  placeholder="Start Date"*/}
                  {/*></InputBoxWithIcon>*/}
                  {/*<InputBoxWithIcon*/}
                  {/*    value = {endDate}*/}
                  {/*    onChange = {endDateChangeHandler}*/}
                  {/*  icon={*/}
                  {/*    <svg*/}
                  {/*      xmlns="http://www.w3.org/2000/svg"*/}
                  {/*      fill="none"*/}
                  {/*      viewBox="0 0 24 24"*/}
                  {/*      stroke-width="1.5"*/}
                  {/*      stroke="currentColor"*/}
                  {/*      class="w-6 h-6 stroke-slate-500"*/}
                  {/*    >*/}
                  {/*      <path*/}
                  {/*        stroke-linecap="round"*/}
                  {/*        stroke-linejoin="round"*/}
                  {/*        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"*/}
                  {/*      />*/}
                  {/*    </svg>*/}
                  {/*  }*/}
                  {/*  width="w-[246px]"*/}
                  {/*  placeholder="End Date"*/}
                  {/*></InputBoxWithIcon>*/}
                </div>
                <div className="flex justify-center">
                  <XLargeButton
                    text="Create Trip"
                    colour="bg-primary-green"
                    textColour="white"
                    border=""
                    onClick = {clickHandler}
                  ></XLargeButton>
                </div>
              </div>
            </div>
          </div>
      </div>
    </form>
  );
}

export default NewTripModal;
