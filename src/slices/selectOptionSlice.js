import { createSlice } from "@reduxjs/toolkit";


const selectOptionSlice=createSlice({
    name:'selectOption',
    initialState:{
        selectOptions:[],
    },
    reducers:{
        addOptionObj:(state,action)=>{
            //take payload 
            const {quationId,optionId}=action.payload
            
            //if not exist then findIndex() return -1 if element is found return the index of that element
            const existingQuationIndex=state.selectOptions.findIndex(element=>element.quationId===quationId)

            //check status of existingQuationIndex and add or update existing array
            if(existingQuationIndex!=-1){
                state.selectOptions[existingQuationIndex] = {quationId,optionId};
            }else{
                state.selectOptions.push({ quationId, optionId });
            }
        }
    }
})


export const selectOptionReducer=selectOptionSlice.reducer
export const {addOptionObj} =selectOptionSlice.actions