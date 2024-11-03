import { configureStore } from "@reduxjs/toolkit";
import SaleSlice from "./features/SaleSlice";
import RentSlice from "./features/RentSlice";
import GbSlice from "./features/GbSlice";
import AgencySlice from "./features/AgencySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      Sale: SaleSlice,
      Rent: RentSlice,
      Global: GbSlice,
      Agency: AgencySlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
