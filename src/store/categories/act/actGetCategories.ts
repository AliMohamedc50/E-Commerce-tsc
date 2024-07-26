import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = { id: number; title: string; prefix: string; img: string }[];

const actGetCategories = createAsyncThunk<
TResponse,
undefined,
{ rejectValue: string }
  >("categories/actGetCategories", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<TResponse>("http://localhost:8008/categories");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    } else {
      return rejectWithValue("An unexpected error");
    }
  }
});

// type AsyncThunkCustomConfig = ReturnType<typeof actGetCategories>;

export default actGetCategories;