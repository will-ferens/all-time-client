import { createAction } from "@reduxjs/toolkit";
import spotify from "spotify-web-api-node";
import { clientId } from "../api/spotify";

export const SPOTIFY_USER_TRACKS_BEGIN = createAction("tracks/fetch/begin");
export const SPOTIFY_USER_TRACKS_SUCESS = createAction("tracks/fetch/succeed");
export const SPOTIFY_USER_TRACKS_FAIL = createAction("tracks/fetch/fail");

export const spotifyApi = new spotify({
  clientId: clientId,
});

export const getTopTracks = (accessToken, range) => async (dispatch) => {
  dispatch(SPOTIFY_USER_TRACKS_BEGIN("loading"));
  try {
    spotifyApi.setAccessToken(accessToken);
    const topTracks = await spotifyApi.getMyTopTracks({
      time_range: range ? range : "long_term",
    });
    dispatch(SPOTIFY_USER_TRACKS_SUCESS(topTracks));
  } catch (err) {
    dispatch(SPOTIFY_USER_TRACKS_FAIL(err.message));
  }
};
