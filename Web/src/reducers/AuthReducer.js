import SecureLS from "secure-ls";
import { createSlice } from "@reduxjs/toolkit";

import { login, logout, register } from "../services/AuthService";

import { alert } from "../utils/constants";

const ls = new SecureLS({ encodingType: "aes" });
const initialState = {
  user: null,
  state: "idle",
};

const setItems = (user, accessToken, refreshToken) => {
  ls.set("_accessToken", JSON.stringify(accessToken));
  ls.set("_refreshToken", JSON.stringify(refreshToken));
  ls.set("_user", JSON.stringify(user));
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    recover: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken } = action.payload;
        setItems(user, accessToken, refreshToken);

        state.state = "success";
        state.user = user;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action.error);
        alert("error", action.error?.message || "Error");
        state.state = "failed";
      });

    builder
      .addCase(login.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken } = action.payload;
        setItems(user, accessToken, refreshToken);

        state.state = "success";
        state.user = user;
      })
      .addCase(login.rejected, (state, action) => {
        alert("error", action.error?.message || "Error");
        state.state = "failed";
      });

    builder
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.state = "idle";
        ls.removeAll();
      })
      .addCase(logout.rejected, (state, action) => {
        state.user = null;
        state.state = "idle";
        ls.removeAll();
        alert("error", action.error?.message || "Error");
      });
  },
});

export const { recover } = authSlice.actions;
export default authSlice.reducer;
