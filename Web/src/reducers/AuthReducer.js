import SecureLS from "secure-ls";
import { createSlice } from "@reduxjs/toolkit";
import { AuthSlice } from "@app/slices/AuthSlice";
import { errorToast, successToast } from "@app/utils/constants";

const ls = new SecureLS({ encodingType: "aes" });

const saveItemsToStorage = (state, action) => {
  const { user, accessToken } = action.payload;
  state.user = user;

  ls.set("_user", JSON.stringify(user));
  ls.set("_accessToken", JSON.stringify(accessToken));
  ls.set("_refreshToken", JSON.stringify(user.refreshToken));
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      saveItemsToStorage(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      AuthSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        saveItemsToStorage(state, action);
        successToast("Bienvenido de vuelta");
      }
    );
    builder.addMatcher(
      AuthSlice.endpoints.login.matchRejected,
      (state, action) => {
        errorToast(action.payload?.data);
      }
    );

    builder.addMatcher(
      AuthSlice.endpoints.signUp.matchFulfilled,
      (state, action) => {
        saveItemsToStorage(state, action);
      }
    );
    builder.addMatcher(
      AuthSlice.endpoints.signUp.matchRejected,
      (state, action) => {
        errorToast(action.payload?.data);
      }
    );

    builder.addMatcher(
      AuthSlice.endpoints.verify.matchFulfilled,
      (state, action) => {
        saveItemsToStorage(state, action);
        successToast("Cuenta verificada");
      }
    );
    builder.addMatcher(
      AuthSlice.endpoints.verify.matchRejected,
      (state, action) => {
        errorToast(action.payload?.data);
      }
    );

    builder.addMatcher(
      AuthSlice.endpoints.resendCode.matchFulfilled,
      (state, action) => {
        saveItemsToStorage(state, action);
        successToast("Se envió un nuevo código a tu correo");
      }
    );
    builder.addMatcher(
      AuthSlice.endpoints.resendCode.matchRejected,
      (state, action) => {
        state.user = null;
        errorToast(action.payload?.data);
      }
    );

    builder.addMatcher(
      AuthSlice.endpoints.findProfile.matchFulfilled,
      (state, action) => {
        saveItemsToStorage(state, action);
        successToast("Bienvenido de vuelta");
      }
    );
    builder.addMatcher(
      AuthSlice.endpoints.findProfile.matchRejected,
      (state, action) => {
        state.user = null;
        ls.removeAll();
        errorToast(action.payload?.data);
      }
    );

    builder.addMatcher(
      AuthSlice.endpoints.updateProfile.matchFulfilled,
      (state, action) => {
        saveItemsToStorage(state, action);
        successToast("Perfil actualizado");
      }
    );
    builder.addMatcher(
      AuthSlice.endpoints.updateProfile.matchRejected,
      (state, action) => {
        errorToast(action.payload?.data);
      }
    );

    builder.addMatcher(AuthSlice.endpoints.logout.matchFulfilled, (state) => {
      state.user = null;
      ls.removeAll();
    });
    builder.addMatcher(AuthSlice.endpoints.logout.matchRejected, (state) => {
      state.user = null;
      ls.removeAll();
    });
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
