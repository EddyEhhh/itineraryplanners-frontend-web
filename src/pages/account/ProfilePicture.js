import React, {useEffect, useRef, useState} from "react";
import {getProfilePicture, uploadProfilePicture} from "../../services/AccountService";
import styles from "./ProfilePicture.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import AlertMessage from "../../components/AlertMessageModal/AlertMessage";

export function ProfilePicture({username, handleAlert}){

    const inputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const token = '{TOKEN}';
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0])
        let data = new FormData();
        data.append('image', event.target.files[0]);
        uploadProfilePicture(username, data)
            .then(
            ).catch(
        )
    };

    const [imageUrl, setImageUrl] = useState("https://i.pinimg.com/222x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg");
    const displayImage = (username) => {
        getProfilePicture(username).then(
            res => {
                try {
                    if(res !== undefined){
                        setImageUrl(res.data);
                    }
                    document.getElementById("profilePic").src = imageUrl;
                } catch (e) {
                    console.log(e);
                }
            }
        )
    }

    useEffect(() => {
        const profilePic = document.getElementById('profile-picture');
        const uploadDiv = document.getElementById('upload');
        profilePic.addEventListener('mouseover', function handleMouseOver() {
            uploadDiv.style.opacity = '1';
        })

        profilePic.addEventListener('mouseout', function handleMouseOut() {
            uploadDiv.style.opacity = '0';
        })
    });


    return (
        <div id="profile-picture" onClick={handleImageClick}>
            {image ?
                <img src={URL.createObjectURL(image)} alt="" className="img-display"/> :
                <img id="profilePic" src={displayImage(username)} className="img-display"/>}
                <div id="upload">
                    <FontAwesomeIcon icon={faCamera} size="sm" style={{color: "#ffffff", position: "absolute", left: '27.5%', top: '10%'}}/>
                    <p className="change-text">Upload</p>
                    <input type="file" className="my_file" ref={inputRef} onChange={handleImageChange}  style={{display: "none"}}/>
                </div>
        </div>

    )
}
