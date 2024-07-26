import { createSlice } from "@reduxjs/toolkit";

export interface ICategoriesState {
    record : {id: number, title: string, prefix: string, img: string}[],
    loading : "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}

const initialState : ICategoriesState = {
    record : [],
    loading : "idle",
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})


export default categoriesSlice.reducer;