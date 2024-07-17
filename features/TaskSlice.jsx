import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks:[]
}
const saveTask = JSON.parse(localStorage.getItem("task"))
if(saveTask){
    initialState.tasks = saveTask
}
const taskSlice =createSlice({
    "name":"task",
    initialState,
     reducers:{
        addTask:(state,action)=>{
            state.tasks = [...state.tasks,action.payload ]
            localStorage.setItem("task",JSON.stringify(state.tasks))
        }
     }
});

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;