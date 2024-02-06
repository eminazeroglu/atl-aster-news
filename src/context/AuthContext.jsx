import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : false);
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false);

    const handleToken = token => {
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
    }

    const handleUser = user => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(false);
        setUser(false);
    }

    const values = {
        token,
        user,
        handleLogout,
        handleToken,
        handleUser
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export const useContextAuth = () => useContext(AuthContext);