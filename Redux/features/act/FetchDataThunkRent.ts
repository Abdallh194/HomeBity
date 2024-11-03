import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-rent",
    hitsPerPage: "12",
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "x-rapidapi-key": "32a452f4bbmsh3f09250ab34ee28p13eb29jsn2a516c670511",
    "x-rapidapi-host": "bayut.p.rapidapi.com",
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
