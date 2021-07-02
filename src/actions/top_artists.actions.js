import { createAction } from "@reduxjs/toolkit";
import spotify from "spotify-web-api-node";
import { clientId } from "../api/spotify";

export const SPOTIFY_USER_ARTIST_BEGIN = createAction("artists/fetch/begin");
export const SPOTIFY_USER_ARTIST_SUCCESS = createAction(
  "artists/fetch/succeed"
);
export const SPOTIFY_USER_ARTIST_RANGE = createAction("artists/fetch/range");
export const SPOTIFY_USER_ARTIST_FAILURE = createAction("artists/fetch/fail");

export const spotifyApi = new spotify({
  clientId: clientId,
});

export const getTopArtists = (accessToken, range) => async (dispatch) => {
  dispatch(SPOTIFY_USER_ARTIST_BEGIN("loading"));
  try {
    spotifyApi.setAccessToken(accessToken);
    const topArtists = await spotifyApi.getMyTopArtists({
      time_range: range ? range : "long_term",
    });
    dispatch(SPOTIFY_USER_ARTIST_SUCCESS(topArtists.body.items));
    dispatch(SPOTIFY_USER_ARTIST_RANGE(range ? range : "long_term"));
  } catch (err) {
    dispatch(SPOTIFY_USER_ARTIST_FAILURE(err.message));
  }
};
