"use client"
import  configureStore  from "@reduxjs/toolkit";
import dataSlice from "./slice/dataSlice";


const store = configureStore({
    reducer: {
        customer:dataSlice
    }
})
export default store;