import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customTypes/Product"; 

const actGetProductsByCatPrefix  = createAsyncThunk<
TProduct,
undefined,
{ rejectValue: string }
  >("products/actGetProducts", async (prefix, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<TProduct>(`http://localhost:8008/products?cat_prefix=${prefix}`);
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

export default actGetProductsByCatPrefix ;