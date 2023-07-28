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

export const saveAccountDetails = async (username, props) => {
    try {
        return await AxiosInstance.put("/api/v1/accounts/" + username + '/edit',
            props,
            {
                ...getAuthConfig(),
                'Content-Type': 'application/json'
            });
    } catch (e) {
        console.log(e);
    }
}

export const saveNewPassword = async (username, props) => {
    try {
        return await AxiosInstance.put("/api/v1/accounts/" + username + '/updatePassword',
            props,
            {
                ...getAuthConfig(),
                'Content-Type': 'application/json'
            });
    } catch (e) {
        console.log(e);
    }
}





