import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "@customTypes/Category";

const actGetCategories = createAsyncThunk<
TCategory,
undefined,
{ rejectValue: string }
  >("categories/actGetCategories", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<TCategory>("http://localhost:8008/category");
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