import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const app = createSlice({
    name: 'app',
    initialState: {
        formErrors: false,
        language: localStorage.getItem('language') || 'az'
    },
    reducers: {
        setFormErrors: (state, action) => {
            state.formErrors = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem('language', state.language);
            window.location.reload();
        }
    }
})

export const {setFormErrors, setLanguage} = app.actions;

export const useStoreApp = () => useSelector(s => s.app);

export default app.reducer;