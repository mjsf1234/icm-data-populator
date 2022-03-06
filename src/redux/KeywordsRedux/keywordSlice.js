import { createSlice } from "@reduxjs/toolkit";
import keywordReduxThunk from "./keywordReduxThunk";

const initialState = {
  data: [],
  loading: false,
  Error: null,
};

const keywordReduxSlice = createSlice({
  name: "keywordSlice",
  initialState,

  extraReducers: {
    [keywordReduxThunk.pending]: (state) => {
      state.loading = true;
      state.Error = null;
    },
    [keywordReduxThunk.rejected]: (state, action) => {
      state.loading = false;
      state.Error = action.payload;
    },
    [keywordReduxThunk.fulfilled]: (state, action) => {
      state.loading = false;
      //   state.Error = action.payload;
      state.data = action.payload;
    },
  },
});

// export const { setKeyword } = keywordReduxSlice.actions;

export default keywordReduxSlice.reducer;
