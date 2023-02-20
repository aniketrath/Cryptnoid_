import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/index";
import { StoreNames } from "../config";

const initialState : AuthState = {
    username: '',
    password: '',
};

export const AuthReducer = createSlice({
    name:StoreNames.AUTH,
    initialState,
    reducers:{
        setUsername:(state,action:PayloadAction<string>) =>{
            state.username = action.payload;
            console.log(state.username);
        },
        setPassword:(state,action:PayloadAction<string>) =>{
            state.password = action.payload;
            console.log(state.password);
        },
        login:(state,action) =>{
            state.username = action.payload;
            state.password = action.payload;
            console.log(state.username , state.password);
        },
        logout:(state) =>{
            state.username = initialState.username;
            state.password = initialState.password;
        }
    }
});

export const {
    setUsername ,
    setPassword ,
    login ,
    logout
} = AuthReducer.actions;
export default AuthReducer.reducer