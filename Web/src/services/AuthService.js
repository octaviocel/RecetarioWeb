import httpClient from "./HttpClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

const prefix = "/auth";

export const register = createAsyncThunk("auth/signup", async (user) => {
  return (await httpClient.post(`${prefix}/signup`, user)).data;
});

export const login = createAsyncThunk("auth/signin", async (credentials) => {
  return (await httpClient.post(`${prefix}/signin`, credentials)).data;
});

export const logout = createAsyncThunk("auth/logout", async (id) => {
  return (await httpClient.post(`${prefix}/logout`, id)).data;
});
