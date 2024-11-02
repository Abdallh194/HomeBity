import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetHouseDetails = createAsyncThunk(
  "user/GetHouseDetails",
  async (externalID: number, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const req = await fetch(
        `https://bayut.p.rapidapi.com/properties/detail?externalID=${externalID}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "32a452f4bbmsh3f09250ab34ee28p13eb29jsn2a516c670511",
            "x-rapidapi-host": "bayut.p.rapidapi.com",
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
