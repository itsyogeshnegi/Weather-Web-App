import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    stateValue: "",
  },
  reducers: {
    liveLocation: (state, action) => {

    },
    stateWise: (state, action) => {},
    searchWise: (state, action) => {},
  },
});

export const { liveLocation, stateWise, searchWise } = stateSlice.actions;

export default stateSlice.reducer; 