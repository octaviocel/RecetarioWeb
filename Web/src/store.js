import { configureStore } from "@reduxjs/toolkit";

import { ApiSlice } from "./slices/ApiSlice";
import AuthReducer from "./reducers/AuthReducer";

export default configureStore({
  reducer: {
    // API General Reducer
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    // Reducer for auth
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});
