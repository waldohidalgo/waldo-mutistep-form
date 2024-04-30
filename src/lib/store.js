import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./features/personalInfo/personalInfoSlice.js";
import planReducer from "./features/planSlice/planSlice.js";
import billingReducer from "./features/billing/billingSlice.js";
import addonsReducer from "./features/addons/addonsSlice.js";
import stepReducer from "./features/step/stepSlice.js";

export const makeStore = () => {
  return configureStore({
    reducer: {
      personalInfo: personalInfoReducer,
      plan: planReducer,
      billing: billingReducer,
      addons: addonsReducer,
      step: stepReducer,
    },
  });
};
