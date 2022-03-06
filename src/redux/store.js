import { configureStore } from "@reduxjs/toolkit";
import keywordReducer from "./KeywordsRedux/keywordSlice";

export default configureStore({
  reducer: {
    keyword: keywordReducer,
  },
});
