import {createSlice } from "@reduxjs/toolkit";



export const counterSlice=createSlice({
    name:"allfunction",
    initialState:{
        counter:0
    },
    reducers:{
       Incement:(state)=>{
        state.counter += 10 
       },
       Decrement:(state)=>{
        state.counter -=10
       },
       incrementbynumber:(state,action)=>{
        state.counter=state.counter+action.payload
       }
    }
})


export default counterSlice.reducer

export const {Incement,Decrement,incrementbynumber}=counterSlice.actions
