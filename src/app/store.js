import { configureStore } from "@reduxjs/toolkit";

const reducer = {};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
