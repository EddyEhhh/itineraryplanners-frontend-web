import AxiosInstance from "../api/AxiosInstance.js";
import { getAuthConfig } from "../services/AuthenticationService";


export const getLatestTrip = async (username) => {
    try {
        return await AxiosInstance.get("/api/v1/accounts/" + username + '/trips',
            {
                ...getAuthConfig()
            });
    } catch (e) {
        console.log(e);
    }
}




