import { createReducer } from "@reduxjs/toolkit";

import {
  SPOTIFY_LOGIN_BEGIN,
  SPOTIFY_LOGIN_SUCCESS,
  SPOTIFY_LOGIN_FAILURE,
} from "../actions/auth.actions";

const initialState = {
  loading: "idle",
  accessToken: null,
  refreshToken: null,
  error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SPOTIFY_LOGIN_BEGIN, (state, action) => {
      return { ...state, loading: action.payload };
    })
    .addCase(SPOTIFY_LOGIN_SUCCESS, (state, action) => {
      return {
        ...state,
        accessToken: action.payload,
        loading: "fetched",
      };
    })
    .addCase(SPOTIFY_LOGIN_FAILURE, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: "failed",
      };
    });
});
