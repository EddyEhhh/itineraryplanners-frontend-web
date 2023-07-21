import AxiosInstance from "../api/AxiosInstance.js";

export const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }}
)

export const login = async (loginData) =>{
    // const {username, password} = loginData;
    console.log(loginData)
    try {
        const response = await AxiosInstance.post(
            "/api/v1/auth",
            loginData
        )
        console.log("Response received");
        return response;
    } catch (e){
        console.log(e);
    }
}

// export const login = async (loginData) => {
//     const response = await fetch('http://localhost:8080/api/v1/auth', {
//         method: 'POST',
//         body: loginData, // string or object
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     // const myJson = await response.json(); //extract JSON from the http response
//     return response.json();
// }

export const register = async (registerData) =>{
    // const {displayName, username, email, password} = registerData;
    try{
        const response = await AxiosInstance.post(
            "api/v1/auth/register",
            registerData
        )
        return response
    } catch (e){
        console.log(e);
    }
}

export const getAccount = async () =>{
    // const {displayName, username, email, password} = registerData;
    try{
        const response = await AxiosInstance.get(
            "api/v1/auth",
            getAuthConfig()
        )
        return response
    } catch (e){
        console.log(e);
    }
}