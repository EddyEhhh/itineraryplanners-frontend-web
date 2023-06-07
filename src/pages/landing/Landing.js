
import {useNavigate} from "react-router-dom";
import PasswordReset from "../../components/PasswordReset/PasswordReset";
import {MediumButton, SmallButton, XLargeButton} from "../../components/RectangleButton/RectangleButton";
import kr from './kr.jpeg';

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div>
                <div className = "Layout h-10 relative overflow-hidden h-[950px]">
                    <img className="w-full absolute"  src ={kr} alt = ""></img>

                    <div className=" origin-center absolute rotate-[65deg] bg-white h-[1000px] w-[1900px] -ml-[700px] mt-[300px] ">
                    </div>

                    <div className = "m-5 ml-20 absolute font-semibold flex justify-between items-center w-52 text-base">
                        <div className = "mr-8 ">
                            <button > X </button>
                        </div>
                        <button> Log in </button>
                        <button> Sign up </button>
                        <PasswordReset text ="password reset"></PasswordReset>
                    </div>


                    <div className = "absolute flex-col mt-[350px] ml-[150px] mt-[300px]">
                        <p className = "font-bold text-5xl leading-[3.2rem]"> Going <br></br>somewhere? </p>
                        <p className = "mt-2 font-semibold text-lg"> Make your next vacation enriching <br/> &
                            memorable with our itinerary planner</p>

                        <div className="flex items-center h-12 mt-8 w-contain">
                            <XLargeButton
                                text = "Start Planning" hover = "" colour = "primary-green" disabled = "" route = "home"
                            />
                        </div>
                    </div>



                </div>
        </div>
    );
}


export default Landing;