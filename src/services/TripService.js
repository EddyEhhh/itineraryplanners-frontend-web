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

export const createBasicTrip = async (username, basicTripData) =>{
    // const {displayName, username, email, password} = registerData;
    try{
        const response = await AxiosInstance.post(
            "/api/v1/accounts/" + username + "/trips",
            basicTripData,
            {
                ...getAuthConfig()
            }
        )
        return response
    } catch (e){
        throw (e);
    }
}

export const getTripDetails = async (username, tripId) =>{
    // const {displayName, username, email, password} = registerData;
    try{
        return await AxiosInstance.get(
            "/api/v1/accounts/" + username + "/trips/" + tripId,
            {
                ...getAuthConfig()
            }
        );
    } catch (e){
        throw (e);
    }
}





