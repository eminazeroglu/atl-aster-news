import { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [dark, setDark] = useState(localStorage.getItem('dark') ? true : false);
    const [formErrors, setFormErrors] = useState(false);

    const handleDarkMode = (e) => {
        setDark(e)
        if (e) localStorage.setItem('dark', true);
        else localStorage.removeItem('dark');
    }

    const values = {
        dark,
        handleDarkMode,
        formErrors,
        setFormErrors
    }

    useEffect(() => {
        if (dark) document.querySelector('body').classList.add('dark')
        else document.querySelector('body').classList.remove('dark')
    }, [dark])

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useContextGlobal = () => useContext(GlobalContext);