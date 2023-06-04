
import {useNavigate} from "react-router-dom";
const Intro = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/home")}> hi click me</button>
    );
}

export default Intro;