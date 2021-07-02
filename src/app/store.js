import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/auth.reducers.js";
import { userTopArtists } from "../reducers/topArtists.reducer";
import { userTopTracks } from "../reducers/topTracks.reducer";
import { themeReducer } from "../reducers/theme.reducer";

const reducer = {
  authReducer,
  userTopArtists,
  themeReducer,
  userTopTracks,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
