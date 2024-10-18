import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://bayut.p.rapidapi.com/properties/detail?externalID=4937770";
type TDataType = {
  id: string;
  images: string;
  title: string;
  price: number;
  cat_prefix: string;
  Quantity?: number;
  discount: string;
  max: number;
}[];
const GetData = createAsyncThunk("user/getdata", async (_, thunkapi) => {
  const { rejectWithValue } = thunkapi;
  try {
    const req = await axios.get<TDataType>(url, {
      headers: {
        "x-rapidapi-key": "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
        "x-rapidapi-host": "bayut.p.rapidapi.com",
      },
    });
    return req.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue(" n expected error ");
    }
  }
});
export default GetData;
