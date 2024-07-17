import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./TaskSlice";

const  store = configureStore({
    reducer:{
        task:taskSlice
    }
})

export default store ;