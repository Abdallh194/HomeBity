import { createSlice } from "@reduxjs/toolkit";
import GetDataRent from "./act/FetchDataThunkRent";

export interface IProductsState {
  RentHouse: [];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductsState = {
  RentHouse: [],
  loading: "pending",
  error: null,
};

const RentSlice = createSlice({
  name: "rent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get Rent Houses
    builder.addCase(GetDataRent.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetDataRent.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.RentHouse = action.payload;
      }
    });
    builder.addCase(GetDataRent.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { GetDataRent };
export default RentSlice.reducer;
