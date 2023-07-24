import React, {useRef, useState} from "react";
import {getProfilePicture, uploadProfilePicture} from "../../services/AccountService";

export function ProfilePicture({username}){

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
                    setImageUrl(res.data);
                    document.getElementById("profilePic").src = imageUrl;
                } catch (e) {
                    console.log(e);
                }
            }
        )
    }

    return (
        <div onClick={handleImageClick}>
            {image ? <img src={URL.createObjectURL(image)} alt="" className="img-display"/> : <img id="profilePic" src={displayImage(username)} className="img-display"/>}
            <input type="file" ref={inputRef} onChange={handleImageChange} style={{display: "none"}} />
        </div>
    )
}
