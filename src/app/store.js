import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.reducers.js";

const reducer = { authReducer };

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
