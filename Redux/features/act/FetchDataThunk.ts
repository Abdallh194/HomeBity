import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";

const GetSale = createAsyncThunk("user/getdata", async (_, thunkapi) => {
  const { rejectWithValue } = thunkapi;
  try {
    const req = await axios.get(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "32a452f4bbmsh3f09250ab34ee28p13eb29jsn2a516c670511",
        "x-rapidapi-host": "bayut.p.rapidapi.com",
      },
    });
    return req.data.hits;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue(" n expected error ");
    }
  }
});
export default GetSale;
