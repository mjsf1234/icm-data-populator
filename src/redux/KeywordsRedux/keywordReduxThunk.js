import { createAsyncThunk } from "@reduxjs/toolkit";
import graphqlClient from "../../graphql/graphqlClient";
import { getKeywordQuery } from "../../graphql/graphqlQueries";

const keywordReduxThunk = createAsyncThunk(
  "keywordsBenchmarking/getKeywords",
  async (_, thunkApi) => {
    try {
      const data = await graphqlClient.request(getKeywordQuery.query);
      return data.domainKeywords;
    } catch (error) {
      return thunkApi.rejectWithValue({ message: error.message });
    }
  }
);
export default keywordReduxThunk;
