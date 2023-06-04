
import {useNavigate} from "react-router-dom";
import PasswordReset from "../../components/PasswordReset/PasswordReset";
import { useState } from "react";
const Landing = () => {
    const navigate = useNavigate();
    return (
        <div>
        <button onClick={() => navigate("/home")}> hi click me</button>
        <PasswordReset></PasswordReset>
        </div>
    );
}

function openResetPasswordPopup() {

}

export default Landing;