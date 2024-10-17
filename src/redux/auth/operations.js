import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const registration = createAsyncThunk(
  "registration",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
