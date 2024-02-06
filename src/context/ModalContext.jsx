import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {

    const [title, setTitle] = useState({});
    const [data, setData] = useState(false);
    const [open, setOpen] = useState({});


    const handleModal = (name, title = false, data = false) => {
        setOpen(o => (
            {
                ...o,
                [name]: !o[name]
            }
        ));
        setTitle(t => ({
            ...t,
            [name]: title || ''
        }))
        setData(data)
    }

    const values = {
        title,
        data,
        open,
        handleModal
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    )
}

export const useContextModal = () => useContext(ModalContext)