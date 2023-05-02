import { configureStore } from "@reduxjs/toolkit";
import meanReducer from './meanSlice'
export const store = configureStore({
    reducer : {
        mean : meanReducer,
    }
})
 