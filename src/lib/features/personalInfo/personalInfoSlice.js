import { createSlice } from "@reduxjs/toolkit";

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: {
    name: "",
    email: "",
    phone: "",
  },
  reducers: {
    changePersonalInfoName: (state, action) => {
      state.name = action.payload;
    },
    changePersonalInfoEmail: (state, action) => {
      state.email = action.payload;
    },
    changePersonalInfoPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changePersonalInfoName,
  changePersonalInfoEmail,
  changePersonalInfoPhone,
} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
