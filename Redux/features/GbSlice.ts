import { createSlice } from "@reduxjs/toolkit";
import GetHouseDetails from "./act/GetHouseDetails";

interface House {
  price: number;
  rentFrequency: string;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: {
    name: string;
    logo: { url: string };
  };
  isVerified: boolean;
  description: string;
  type: string;
  purpose: string;
  furnishingStatus: string;
  amenities: { text: string }[];
  photos: { url: string; title: string }[];
}
export interface IProductsState {
  HouseDetails: House[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
  fromsale: string;
}

const initialState: IProductsState = {
  HouseDetails: [],
  loading: "pending",
  error: null,
  fromsale: "Sale",
};

const GbSlice = createSlice({
  name: "Details",
  initialState,
  reducers: {
    HandleSearchResult: (state, action) => {
      state.fromsale = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Get Rent Houses
    builder.addCase(GetHouseDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetHouseDetails.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.HouseDetails = action.payload;
    });
    builder.addCase(GetHouseDetails.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { GetHouseDetails };
export const { HandleSearchResult } = GbSlice.actions;
export default GbSlice.reducer;
