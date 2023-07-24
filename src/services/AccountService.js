import AxiosInstance from "../api/AxiosInstance.js";
import { getAuthConfig } from "../services/AuthenticationService";


export const uploadProfilePicture = async (username, imageData) => {
    try {
        return await AxiosInstance.post("/api/v1/accounts/" + username + '/imageUpload',
            imageData,
            {
                ...getAuthConfig(),
                'Content-Type': 'multipart/form-data'
            });
    } catch (e){
        console.log(e);
    }
}

export const getProfilePicture = async (username) => {
    try {
        return await AxiosInstance.get("/api/v1/accounts/" + username + '/imageRetrieve',
            getAuthConfig())
    } catch (e) {
        console.log(e);
    }
}





