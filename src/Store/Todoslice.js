import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";



export const Todoslice=createSlice({
    name:'todoapp',
    initialState:{
        Todo:[],
        updateData:{}
    },

    reducers:{
        Addtodo:(state,action)=>{
        const newtodo ={id:v4(),Task:action.payload,complete:false}
        state.Todo=[...state.Todo,newtodo]
        return state
        },
        Removetodo:(state,action)=>{
            state.Todo.splice(action.payload,1)
        },
        UpdateTodo:(state,action)=>{
            const finddata =state.Todo.find((x)=>x.id===action.payload)
            state.updateData=finddata
            

        },
        UpdateTodoData:(state,action)=>{
            const finddata =state.Todo.find((x)=>x.id===state.updateData.id)
            finddata.Task=action.payload

        },
        Todocomplete(state,action){
            const finddata =state.Todo.find((x)=>x.id===action.payload)
            finddata.complete=! finddata.complete
        }
    }
})


export default Todoslice.reducer

export const { Addtodo,Removetodo,UpdateTodo,UpdateTodoData,Todocomplete}=Todoslice.actions