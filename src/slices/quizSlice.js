import { createSlice } from "@reduxjs/toolkit";



const quizSlice=createSlice({
    name:'quiz',
    initialState:'',
    reducers:{
        addQuestions:{

        },

    }
})


export const quizReducer=quizSlice.reducer
export const {addQuestions} =quizSlice.actions