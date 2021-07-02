import { createReducer } from "@reduxjs/toolkit";

import {
  SPOTIFY_USER_TRACKS_BEGIN,
  SPOTIFY_USER_TRACKS_SUCESS,
  SPOTIFY_USER_TRACKS_FAIL,
  SPOTIFY_USER_TRACKS_RANGE,
} from "../actions/top_tracks.actions";

const initialState = {
  loading: "idle",
  topTracks: [],
  range: "long_term",
  error: null,
};

export const userTopTracks = createReducer(initialState, (builder) => {
  builder
    .addCase(SPOTIFY_USER_TRACKS_BEGIN, (state, action) => {
      return { ...state, loading: action.payload };
    })
    .addCase(SPOTIFY_USER_TRACKS_SUCESS, (state, action) => {
      return { ...state, topTracks: action.payload, loading: "fetched" };
    })
    .addCase(SPOTIFY_USER_TRACKS_RANGE, (state, action) => {
      return { ...state, range: action.payload };
    })
    .addCase(SPOTIFY_USER_TRACKS_FAIL, (state, action) => {
      return { ...state, error: action.payload, loading: "failed" };
    });
});
