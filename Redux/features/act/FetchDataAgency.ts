import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetAgencyDetails = createAsyncThunk(
  "user/GetAgencyDetails",
  async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await axios.get(
        `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&agencyExternalIDs=${id}`,
        {
          headers: {
            "x-rapidapi-key":
              "32a452f4bbmsh3f09250ab34ee28p13eb29jsn2a516c670511",
            "x-rapidapi-host": "bayut.p.rapidapi.com",
          },
        }
      );
      return req.data.hits;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);

export default GetAgencyDetails;
