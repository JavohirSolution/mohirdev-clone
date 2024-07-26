import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../helpers/token.helpers";

export const initialState = {
    isloading: false,
    isLogged: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUserStart: (state, action) => {
            state.isloading = true
        },
        signUserSuccess: (state, action) => {
            state.isloading = false
            state.isLogged = true
            state.user = action.payload
            setToken("token", action.payload.token)

        },
        signUserFailure: (state, action) => {
            state.isloading = false
            state.error = action.payload
        },
        logoutUser: (state, action) => {
            state.isLogged = false
            state.isloading = false
            state.user = null
        }
    }
})

export const { signUserStart, signUserSuccess, signUserFailure, logoutUser } = authSlice.actions;
export default authSlice.reducer