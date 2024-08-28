import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

const counterLogic = (state = 0, action)=>{
    switch (action.type) {
        case "add":
          return state + 1;
          break;
        case "sub":
            return state - 1;
        default:
          return state;
      }
      
        
}

export const myStore = configureStore({
    reducer:{
        "counter":counterLogic
    }
})

