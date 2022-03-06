import { createSlice } from "@reduxjs/toolkit";
import { getTestThunk } from "./exampleReduxThunk";

const initialState = {
  test: "",
  testLoading: false,
  testError: null,
};

const exampleReduxSlice = createSlice({
  name: "exampleReduxSlice",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
  extraReducers: {
    [getTestThunk.pending]: (state) => {
      state.testLoading = true;
      state.testError = null;
    },
    [getTestThunk.rejected]: (state, action) => {
      state.testLoading = false;
      state.testError = action.payload;
    },
    [getTestThunk.fulfilled]: (state, action) => {
      state.testLoading = false;
      state.testError = action.payload;
    },
  },
});

export const { setTest } = exampleReduxSlice.actions;

export default exampleReduxSlice.reducer;
