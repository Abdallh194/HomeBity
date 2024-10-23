import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    name: "Abu Dhabi",
    purpose: "for-rent",
    hitsPerPage: "30",
    page: "0",
    sort: "city-level-score",
  },
  headers: {
    "x-rapidapi-key": "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
    "x-rapidapi-host": "bayut-com1.p.rapidapi.com",
  },
};
const GetDataRent = createAsyncThunk("user/getdata", async (_, thunkapi) => {
  const { rejectWithValue } = thunkapi;
  try {
    const req = await axios.request(options);
    return req.data.hits;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue(" n expected error ");
    }
  }
});
export default GetDataRent;
