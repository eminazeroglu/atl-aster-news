import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const app = createSlice({
    name: 'app',
    initialState: {
        formErrors: false
    },
    reducers: {
        setFormErrors: (state, action) => {
            state.formErrors = action.payload;
        }
    }
})

export const {setFormErrors} = app.actions;

export const useStoreApp = () => useSelector(s => s.app);

export default app.reducer;