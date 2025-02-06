import { createSlice } from "@reduxjs/toolkit";


const quizResult=createSlice({
    name:'quizResult',
    initialState:{
        result:0,
    },
    reducers:{
        setResult:(state,actions)=>{
            state.result=actions.payload
        },
    }
})


export const {setResult}=quizResult.actions
export const quizResultReduces=quizResult.reducer