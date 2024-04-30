import { createSlice } from "@reduxjs/toolkit";

export const billingSlice = createSlice({
  name: "billing",
  initialState: {
    billing: "monthly",
  },
  reducers: {
    changeBill: (state, action) => {
      state.billing = action.payload;
    },
  },
});

export const { changeBill } = billingSlice.actions;

export default billingSlice.reducer;
