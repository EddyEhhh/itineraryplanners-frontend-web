import AxiosInstance from "../api/AxiosInstance.js";

export const demo = async () => {
    try{
        return await AxiosInstance.get(
            "/api/v1/demo",
            {}
        )
    } catch (e){
        throw e;
    }


}