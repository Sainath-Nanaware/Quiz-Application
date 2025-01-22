import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "../slices/quizSlice";
import { selectOptionReducer } from "../slices/selectOptionSlice";



const store=configureStore({
    reducer:{
        quiz:quizReducer,
        selectOption:selectOptionReducer,
    }
})

export default store