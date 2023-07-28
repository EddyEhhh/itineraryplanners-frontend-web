import {useEffect, useState} from "react";
import styles from "./AlertMessage.scss";
function AlertMessage(props){ // props include message and status
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 3000)
        return () => {
            clearTimeout(timeId);
        }
    }, []);

    if(!show){
        return null;
    }

    if(props.status === 'success') {
        return (
            <div id="alert-popup">
                <p>{props.message}</p>
            </div>
        );
    }
}

export default AlertMessage;