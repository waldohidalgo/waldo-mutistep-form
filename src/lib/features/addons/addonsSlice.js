import { createSlice } from "@reduxjs/toolkit";

export const addonsSlice = createSlice({
  name: "addons",
  initialState: {
    onlineService: true,
    largerStorage: true,
    customizableProfile: false,
  },
  reducers: {
    changeAddons: (state, action) => {
      //action.payload={addon:"nombreAddon",isChecked:true/false}

      state[action.payload.addon] = action.payload.isChecked;
    },
  },
});

export const { changeAddons } = addonsSlice.actions;

export default addonsSlice.reducer;
