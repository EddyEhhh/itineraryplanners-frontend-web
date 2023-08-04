import styles from "./NewTripModal.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBox from "../InputBox";
import InputBoxWithIcon from "../InputBoxWithIcons/InputBoxWithIcon";
import XLargeButton from "../RectangleButton/XLargeButton/XLargeButton";
import DatePicker from "tailwind-datepicker-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {CalendarIcon} from "@heroicons/react/24/solid";
import {MapPinIcon} from "@heroicons/react/24/solid";


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
       navigate('/itinerary', {state:Trip});
    }

    const todayDate = new Date();

    const options = {
        title: "Calendar",
        inputPlaceholderProp: "Select Start Date",
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
        defaultDate: new Date(todayDate.toString()),
        language: "en",

    }
    const options2 = {
        title: "Calendar",
        inputPlaceholderProp: "Select End Date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        maxDate: new Date("2030-01-01"),
        minDate: new Date(startDate),
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
        defaultDate: new Date(todayDate.toString()),
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
        setStartDateDisplay(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
    }
    const handleChangeEndDate = (selectedDate) => {
        setEndDate(selectedDate);
        setEndDateDisplay(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
    }

    const handleKeyPress = (event) => {

        if (event.key === "Enter") {
            clickHandler();
        }
    }
  return (
    <div onKeyDown={handleKeyPress}>
        {/*<GooglePlacesAutocomplete*/}
        {/*    apiKey="****"*/}
        {/*/>*/}
      <div  className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div  id="new-trip-modal" className = "md:w-[600px] md:h-[500px] w-[400px] h-[400px]">
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
                              icon={ <MapPinIcon className="w-6 text-slate-500"/>
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
                                icon={ <CalendarIcon className="w-6 text-slate-500"/>
                                }
                                width="w-[246px]"
                                placeholder="Start Date"
                            ></InputBoxWithIcon>
                        </DatePicker>
                    </div>

                    <div>
                        <DatePicker  className ="w-[512px] md:w-[100px] " options = {options2} onChange={handleChangeEndDate} show={showEndDate} setShow = {handleEndDateClose}>
                            <label htmlFor="date" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-300">
                                End Date
                            </label>
                            <InputBoxWithIcon
                                onFocus={handleEndDateClose}
                                value = {endDateDisplay}
                                icon={ <CalendarIcon className="w-6 text-slate-500"/>
                                }
                              width="w-[246px]"
                              placeholder="End Date"
                            ></InputBoxWithIcon>
                        </DatePicker>
                    </div>
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
    </div>
  );
}

export default NewTripModal;
