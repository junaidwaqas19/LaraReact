import { createSlice } from "@reduxjs/toolkit";

export const userSlice =createSlice({
        name:"userSlice",
        initialState:{
            userList:[],
        },
        reducers:{
            setUserList:(currentSlice, action) =>{
                currentSlice.userList = action.payload;
            },
            addUser:(CurrentSlice, action) =>{
                
            },
        
        }

})