import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "../slice/auth.slice"

export const store = configureStore({
    reducer: {
        auth: AuthReducers
    }
})