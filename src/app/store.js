import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "../slices/quizSlice";
import { selectOptionReducer } from "../slices/selectOptionSlice";
import { quizResultReduces } from "../slices/quizResult";



const store = configureStore({
  reducer: {
    quiz: quizReducer,
    selectOption: selectOptionReducer,
    quizeResult: quizResultReduces,
  },
});

export default store