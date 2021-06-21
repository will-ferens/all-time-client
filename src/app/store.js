import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.reducers.js";
import userReducer from "../reducers/user.reducers";

const reducer = { authReducer, userReducer };

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
