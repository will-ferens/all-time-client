import spotify from "spotify-web-api-node";

export const SPOTIFY_USER_SUCCESS = "SPOTIFY_USER_SUCCESS";
export const SPOTIFY_USER_FAILURE = "SPOTIFY_USER_FAILURE";
export const SPOTIFY_USER_ARTIST_SUCCESS = "SPOTIFY_USER_ARTIST_SUCCESS";

export const spotifyApi = new spotify({
  clientId: "4cf4914b17c340e68221b922b1d20336",
});

export const getUser = (accessToken) => async (dispatch) => {
  try {
    spotifyApi.setAccessToken(accessToken);
    const user = await spotifyApi.getMe();
    const topArtists = await spotifyApi.getMyTopArtists();

    dispatch({ type: SPOTIFY_USER_SUCCESS, payload: user.body });
    dispatch({
      type: SPOTIFY_USER_ARTIST_SUCCESS,
      payload: topArtists.body,
    });
  } catch (err) {
    dispatch({ type: SPOTIFY_USER_FAILURE, payload: err.message });
  }
};
