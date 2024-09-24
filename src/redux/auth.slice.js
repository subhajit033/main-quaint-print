import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isAuthenticated: null,
        userData: null
    },
    reducers:{
        setAuthentication: (state, action)=>{
            state.isAuthenticated = action.payload
        },
        setUserData: (state, action)=>{
            state.userData = action.payload;
        }
    }
})

export const {setAuthentication, setUserData} = authSlice.actions;
export default authSlice.reducer