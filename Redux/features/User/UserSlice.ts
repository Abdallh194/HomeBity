import { createSlice } from "@reduxjs/toolkit";
import GetData from "./FetchDataThunk";

export interface IProductsState {
  AllItems: {
    id: string;
    images: string;
    title: string;
    price: number;
    cat_prefix: string;
    Quantity?: number;
    discount: string;
    max: number;
  }[];
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductsState = {
  AllItems: [],
  loading: "pending",
  error: null,
};

const UserState = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get All Products
    builder.addCase(GetData.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetData.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.AllItems = action.payload;
      }
    });
    builder.addCase(GetData.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { GetData };
export default UserState.reducer;
