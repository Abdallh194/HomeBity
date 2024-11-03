import { createSlice } from "@reduxjs/toolkit";
import GetAgencyDetails from "./act/FetchDataAgency";

export interface IProductsState {
  AgencyHouse: [];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductsState = {
  AgencyHouse: [],
  loading: "pending",
  error: null,
};

const AgencySlice = createSlice({
  name: "agency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get Sale Houses
    builder.addCase(GetAgencyDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetAgencyDetails.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.AgencyHouse = action.payload;
    });
    builder.addCase(GetAgencyDetails.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { GetAgencyDetails };
export default AgencySlice.reducer;
