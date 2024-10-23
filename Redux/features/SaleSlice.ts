import { createSlice } from "@reduxjs/toolkit";
import GetSale from "./act/FetchDataThunk";

export interface IProductsState {
  SaleHouse: [];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductsState = {
  SaleHouse: [],
  loading: "pending",
  error: null,
};

const UserState = createSlice({
  name: "sale",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get Sale Houses
    builder.addCase(GetSale.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetSale.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.SaleHouse = action.payload;
      }
    });
    builder.addCase(GetSale.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { GetSale };
export default UserState.reducer;
