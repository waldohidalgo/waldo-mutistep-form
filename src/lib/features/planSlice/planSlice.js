import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
  name: "plan",
  initialState: {
    plan: "arcade",
  },
  reducers: {
    changePlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const { changePlan } = planSlice.actions;

export default planSlice.reducer;
