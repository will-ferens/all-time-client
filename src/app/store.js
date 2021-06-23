import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.reducers.js";
import userReducer from "../reducers/user.reducers";
import userArtists from "../reducers/artist.reducer";

const reducer = { authReducer, userReducer, userArtists };

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
