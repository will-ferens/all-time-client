import { createReducer } from "@reduxjs/toolkit";

import {
  SPOTIFY_USER_ARTIST_BEGIN,
  SPOTIFY_USER_ARTIST_SUCCESS,
  SPOTIFY_USER_ARTIST_FAILURE,
} from "../actions/top_artists.actions";

const initialState = {
  loading: "idle",
  topArtists: [],
  error: null,
};
export const userTopArtists = createReducer(initialState, (builder) => {
  builder
    .addCase(SPOTIFY_USER_ARTIST_BEGIN, (state, action) => {
      return { ...state, loading: action.payload };
    })
    .addCase(SPOTIFY_USER_ARTIST_SUCCESS, (state, action) => {
      return { ...state, topArtists: action.payload, loading: "fetched" };
    })
    .addCase(SPOTIFY_USER_ARTIST_FAILURE, (state, action) => {
      return { ...state, error: action.payload, loading: "failed" };
    });
});
