import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetHouseDetails = createAsyncThunk(
  "user/GetHouseDetails",
  async (externalID: number, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const req = await fetch(
        `https://bayut-com1.p.rapidapi.com/properties/detail?externalID=${externalID}`,
        {
          headers: {
            "x-rapidapi-key":
              "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
            "x-rapidapi-host": "bayut-com1.p.rapidapi.com",
          },
        }
      );
      return req.json();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue(" n expected error ");
      }
    }
  }
);

export default GetHouseDetails;
