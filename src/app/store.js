import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.reducers.js";
import userReducer from "../reducers/user.reducers";
import userArtists from "../reducers/topArtists.reducer";
import { userTopTracks } from "../reducers/topTracks.reducer";
import themeReducer from "../reducers/theme.reducer";

const reducer = {
  authReducer,
  userReducer,
  userArtists,
  themeReducer,
  userTopTracks,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
