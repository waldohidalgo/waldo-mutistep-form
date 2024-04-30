import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "step",
  initialState: {
    step: 1,
  },
  reducers: {
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { changeStep } = stepSlice.actions;

export default stepSlice.reducer;
