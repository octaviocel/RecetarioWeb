import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./reducers/AuthReducer";

export default configureStore({
  reducer: {
    // Reducer for auth
    auth: AuthReducer,
  },
});
