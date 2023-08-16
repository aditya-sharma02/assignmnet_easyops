"use client"
import  Provider  from "react-redux";
import store from "./page";


export default function ReduxStoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}