import AxiosInstance from "../api/AxiosInstance.js";
import { getAuthConfig } from "../services/AuthenticationService";


export const uploadProfilePicture = async (username, imageData) => {
    try {
        const response = await AxiosInstance.put(
            "/api/v1/accounts/" + username + '/imageUpload',
            imageData,
            {
                ...getAuthConfig(),
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data; boundary=${data._boundary}'
                }
        )
        console.log("========\n" + response);
        return response;
    } catch (e){
        console.log(e);
    }

}

export const getProfilePicture = async (username) => {

    try {
        console.log("am trying");
        const response = await AxiosInstance.get(
            "/api/v1/accounts/" + username + '/imageRetrieve',
                getAuthConfig()
        )
        console.log("What's given back:" + response.data);
        return response;

    } catch (e){
        console.log(e);
    }

}




