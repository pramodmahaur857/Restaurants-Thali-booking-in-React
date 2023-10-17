import {configureStore} from "@reduxjs/toolkit";
import  FoodData from "./FoodData";

const Store = configureStore({
    reducer:{
        state:FoodData,
    }   
})

export default Store; 