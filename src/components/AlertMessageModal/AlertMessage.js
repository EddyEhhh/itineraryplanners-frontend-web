import {useEffect, useState} from "react";
import styles from "./AlertMessage.scss";
function AlertMessage(status){
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

    if(status.status === 'success') {
        return (
            <div id="alert-popup">
                <p>Saved</p>
            </div>
        );
    }
}

export default AlertMessage;