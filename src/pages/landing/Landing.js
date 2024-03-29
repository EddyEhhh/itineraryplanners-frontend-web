import kr from './kr.jpeg';
import PasswordResetModal from "../../components/PasswordResetModal/PasswordResetModal";
import LogInModal from "../../components/LogInModal/LogInModal";
import XLargeButton from "../../components/RectangleButton/XLargeButton/XLargeButton";
import RegisterModal from "../../components/RegisterModal/RegisterModal"
import NewTripModal from '../../components/NewTripModal/NewTripModal';
import {useTranslation, Trans} from 'react-i18next';
import {Suspense, useEffect, useState} from "react";
import {changeLanguage} from "i18next";
import {useNavigate} from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation('landing');
    const lng = navigator.language
    const [logInModal, setLogInModal] = useState(false);
    const logInHandler = () => {
        setLogInModal(!logInModal);
    }
    const routeHandler =() => {
        navigate("/home");
    }

    const[registerModal, setRegisterModal] = useState(false);
    const registerHandler = () => {
        setRegisterModal(!registerModal);
    }

    const changePopUpHandler = () => {
        setRegisterModal(!registerModal);
        setLogInModal(!logInModal);
    }

    const [newTripModal, setNewTripModal] = useState(false);
    const newTripHandler = () => {
        setNewTripModal(!newTripModal);
    }



    return (
        <div>

            <div className = "Layout h-10 relative overflow-hidden h-screen">
                <img className="w-full absolute"  src ={kr} alt = ""></img>

                <div className="origin-center absolute rotate-[65deg] bg-white h-[1000px] w-[1900px] -ml-[700px] mt-[300px] ">
                </div>

                <div className = "absolute flex-col mt-[350px] ml-[150px] mt-[300px] ">
                    <p className = "font-bold text-5xl leading-[3.2rem]">
                        {t('title.part1')} <br/> {t('title.part2')}
                    </p>

                    <p className = "mt-2 font-semibold text-lg">
                        {t('description.part1')} <br/> {t('description.part2')}
                    </p>

                    <div className="flex items-center h-12 mt-8 w-contain">
                        <XLargeButton handleClick = {routeHandler}
                            text = {t('Start_Planning')} hover = "" colour = "bg-primary-green"
                        />
                    </div>
                </div>

                <div className = "m-5 ml-20 absolute font-semibold flex justify-between items-center w-52 text-base">
                    <div className = "mr-8 ">
                        <button > X </button>
                    </div>

                    <button className= "transition duration-500 ease-out" onClick={logInHandler}> {t('logIn')} </button>
                    {logInModal && (
                        <LogInModal onClose = {logInHandler} openPopup = {changePopUpHandler}/>
                    )}
                    <button onClick={registerHandler}> {t('signUp')} </button>
                    <div className="transition: ease-in-out duration-5000">
                        {registerModal && (
                            <RegisterModal onClose = {registerHandler} openPopup = {changePopUpHandler}/>
                        )}
                    </div>

                </div>





            </div>
        </div>
    );
}

//
// <button onClick={newTripHandler}> New Trip modal </button>
// {newTripModal && (
//     <NewTripModal onClose = {newTripHandler}/>
// )}
export default Landing;