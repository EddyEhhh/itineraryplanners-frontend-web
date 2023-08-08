import React, {useEffect} from "react";
import TripBox from "../../components/TripBox/TripBox";
import styles from "./MyTrips.scss";
import FAFAFA from "../../icons/FAFAFA.jpg";
import AddButton from "../../components/AddButton/AddButton";
import { useState, Suspense } from "react";
import NewTripModal from "../../components/NewTripModal/NewTripModal";
import {useTranslation} from "react-i18next";
import {getLatestTrip} from "../../services/TripService";
import {register} from "../../services/AuthenticationService";
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

export function MyTrips() {
  const [showNewTripModal, setNewTripModal] = useState(false);

  const newTripModalHandler = () => {
    setNewTripModal(!showNewTripModal);
  };

  const [username, setUsername] = useState("")

  const [allTrip, setAllTrip] = useState([]);

  const [t, i18n] = useTranslation("tripsPage");

  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const { account } = useAuth();
  // const getTrip = () => {
  //   setIsSubmit(true);
  //   // console.log("Test: ", registerFormValidationError.usernameErrorMessage);
  //
  //   getLatestTrip(account?.username).then(res => {
  //
  //     setAllTrip(res.data);
  //
  //     }).catch(err =>{
  //
  //     }).finally(() => {
  //       setIsSubmit(false);
  //     })
  // }

  useEffect(() => {
    getLatestTrip(account?.username).then(res => {
      setAllTrip(res.data);
    }).catch(err =>{
    }).finally(() => {
      setIsSubmit(false);
    })


  }, [])

  const onTripClick = (id) =>{
    navigate("/itinerary?id=" + id);
  }


  return (
      <div>
        <div className="flex flex-col pt-10 pb-20">
          <Suspense>
          <h1 id="my-trips-title">{t('Title')}</h1>
          </Suspense>
          <div id="my-trips-container">

            {allTrip && allTrip.map(trip =>
                  <TripBox key={trip.id} data={trip} onClick={() => onTripClick(trip.id)}></TripBox>
            )}
            <div className="h-fit flex-col items-center justify-center">
              <div className="w-full h-3/4 rounded-md relative">
                <img
                  src={FAFAFA}
                  className="rounded-md w-full h-full border-2 border-dashed border-light-gray"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <AddButton onButtonClick={newTripModalHandler} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showNewTripModal && (
          <NewTripModal onClose={newTripModalHandler}></NewTripModal>
        )}
      </div>
  );
}

export default MyTrips;
