import { createAsyncThunk } from "@reduxjs/toolkit";
import graphqlClient from "../../graphql/graphqlClient";
import { getTestQuery } from "../../graphql/graphqlQueries";

// Test thunk
export const getTestThunk = createAsyncThunk(
  "keywordsBenchmarking/getKeywords",
  async (_, thunkApi) => {
    try {
      const data = await graphqlClient.request(getTestQuery.query);
      return data[getTestQuery.key];
    } catch (error) {
      return thunkApi.rejectWithValue({ message: error.message });
    }
  }
);
