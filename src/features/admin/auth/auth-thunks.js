import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const loginRequest = createAsyncThunk(
  "auth/login-request",
  async (data) => {
    const response = await api.post("/admin/login", data);
    return response.data;
  },
);
