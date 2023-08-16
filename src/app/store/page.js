"use client"
import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/dataSlice";


export const store = configureStore({
    reducer: {
        customer:dataSlice
    }
})