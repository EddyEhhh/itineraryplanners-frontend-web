import kr from './kr.jpeg';
import PasswordResetModal from "../../components/PasswordResetModal/PasswordResetModal";
import LogInModal from "../../components/LogInModal/LogInModal";
import XLargeButton from "../../components/RectangleButton/XLargeButton/XLargeButton";
import RegisterModal from "../../components/RegisterModal/RegisterModal"
import NewTripModal from '../../components/NewTripModal/NewTripModal';
import {useTranslation, Trans} from 'react-i18next';
import {Suspense, useEffect} from "react";
import {changeLanguage} from "i18next";

// <button type = "submit" onClick={() => {
//     i18n.changeLanguage("en");
// }}> Log in </button>
const Landing = () => {
    const { t, i18n } = useTranslation('landing');
    const lng = navigator.language

    return (
    <Suspense fallback = "loading">
        <div>

            <div className = "Layout h-10 relative overflow-hidden h-screen ">
                <img className="w-full absolute"  src ={kr} alt = ""></img>

                <div className=" origin-center absolute rotate-[65deg] bg-white h-[1000px] w-[1900px] -ml-[700px] mt-[300px] ">
                </div>

                <div className = "m-5 ml-20 absolute font-semibold flex justify-between items-center w-52 text-base">
                    <div className = "mr-8 ">
                        <button > X </button>
                    </div>
                    <button type = "submit"> Log in </button>
                    <button> Sign up </button>

                </div>


                <div className = "absolute flex-col mt-[350px] ml-[150px] mt-[300px]">
                    <p className = "font-bold text-5xl leading-[3.2rem]">
                        {t('title.part1')} <br/> {t('title.part2')}
                    </p>

                    <p className = "mt-2 font-semibold text-lg">
                        {t('description.part1')} <br/> {t('description.part2')}

                    </p>
                    <div className="flex items-center h-12 mt-8 w-contain">
                        <XLargeButton
                            text = "Start Planning" hover = "" colour = "primary-green" disabled = "" route = "home" textColour="white"
                            border =""
                        />
                    </div>

                    <LogInModal></LogInModal>
                    <RegisterModal></RegisterModal>
                    <NewTripModal></NewTripModal>

                </div>

            </div>


        </div>
    </Suspense>
    );
}



export default Landing;