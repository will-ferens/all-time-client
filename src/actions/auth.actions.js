import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
const loginUrl = process.env.REACT_APP_LOGIN_URL;
export const SPOTIFY_LOGIN_BEGIN = createAction("spotify/login/begin");
export const SPOTIFY_LOGIN_SUCCESS = createAction("spotify/login/success");
export const SPOTIFY_LOGIN_FAILURE = createAction("spotify/login/failure");

export const login = (code) => async (dispatch) => {
  dispatch(SPOTIFY_LOGIN_BEGIN("loading"));

  const response = await axios.post(loginUrl, {
    code,
  });

  try {
    dispatch(SPOTIFY_LOGIN_SUCCESS(response.data.accessToken));
  } catch (err) {
    dispatch(SPOTIFY_LOGIN_FAILURE(err.message));
  }
};
