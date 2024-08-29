import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

const counterLogic = (state = 0, action)=>{
    switch (action.type) {
        case "add":
          return state + 1;
        case "sub":
            return state - 1;
        default:
          return state;
      }
      
        
}

const storeMyDetailsReducer =(state ={},action)=>{
    switch(action.type){
        case "saveDetails":
            return action.data;
        break;
    }
    return state;
}


export const myStore = configureStore({
    reducer:{
        "counter":counterLogic,
        "myDetails":storeMyDetailsReducer
    }
})

