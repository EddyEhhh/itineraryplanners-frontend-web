import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {login as performLogin} from "../services/AuthenticationService";
import jwtDecode from "jwt-decode";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [account, setAccount] = useState(null);

    const setAccountFromToken = () => {
        let token = localStorage.getItem("token");
        if (token) {
            token = jwtDecode(token);
            setAccount({
                username: token.sub,
                roles: token.scopes
            })
        }
    }
    useEffect(() => {
        setAccountFromToken()
    }, [])

    const login = async (loginData) => {
        return new Promise((resolve, reject) => {
            performLogin(loginData).then(res =>{
                // console.log("Auth", res.headers);

                const jwtToken = res.headers['authorization']
                // console.log("Test: ",  jwtToken);
                localStorage.setItem("token", jwtToken);
                const decodedToken = jwtDecode(jwtToken);

                //TEMP
                setAccount({
                    username: decodedToken.sub,
                    roles: decodedToken.scopes
                })
                resolve(res);
            }).catch(err => {
                reject(err);
                // throw (err);
            })
        })
    }

    const logout = () => {
        localStorage.removeItem("token");
        setAccount(null);
    }

    const isAuthenticated = () => {
        const token = localStorage.getItem("token");
        if(!token){
            return false;
        }
        const { exp: expiration } = jwtDecode(token);
        if (Date.now() > expiration * 1000){
            logout()
            return false;
        }
        return true;
    }

    return (
        <AuthContext.Provider value={{
            account,
            login,
            logout,
            isAuthenticated,
            setAccountFromToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;