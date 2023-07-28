import InputBox from "../InputBox";
import styles from "./DeactivateAccount.scss";
import MediumCircleButton from "../CircleButton/MediumCircleButton/MediumCircleButton";
import InputBoxWithIcon from "../InputBoxWithIcons/InputBoxWithIcon";
import MediumButton from "../RectangleButton/MediumButton/MediumButton";
import LargeButton from "../RectangleButton/LargeButton/LargeButton";
import React, {useState} from "react";




function DeactivateAccount(props) {
    const [password, setPassword] = useState("");

    const getPasswordHandler = (event) => {
        setPassword(event.target.value);
    }
    const deactivateAccountHandler = () => {
        //TODO: implement this
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">

            <div id="deactivate-account-modal" className="md:w-[500px] md:h-[340px] w-[300px] h-[300px]">
                <div className="corner-element">
                    <MediumCircleButton onButtonClick={props.onClose}/>
                </div>
                <div id="deactivate-account-container" className={"flex md:flex-col"}>
                    <div className="space-y-3">
                        <h1>Account Deactivation</h1>
                        <p>Enter your current password to deactivate your account.</p>
                        <InputBox type="password" placeholder="Password" onChange={getPasswordHandler}></InputBox>
                        <div id="button-div" className="flex justify-center">
                            <LargeButton
                                text="Deactivate account"
                                colour="bg-danger-red"
                                textColour="white"
                                border=""
                                onClick={deactivateAccountHandler}
                            ></LargeButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeactivateAccount;