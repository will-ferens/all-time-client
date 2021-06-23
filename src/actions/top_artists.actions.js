import spotify from "spotify-web-api-node";

export const SPOTIFY_USER_ARTIST_BEGIN = "SPOTIFY_USER_ARTIST_BEGIN";
export const SPOTIFY_USER_ARTIST_SUCCESS = "SPOTIFY_USER_ARTIST_SUCCESS";
export const SPOTIFY_USER_ARTIST_FAILURE = "SPOTIFY_USER_ARTIST_FAILURE";

export const spotifyApi = new spotify({
  clientId: "4cf4914b17c340e68221b922b1d20336",
});

export const getTopArtists = (accessToken, range) => async (dispatch) => {
  dispatch({ type: SPOTIFY_USER_ARTIST_BEGIN, payload: "loading" });
  try {
    spotifyApi.setAccessToken(accessToken);
    const topArtists = await spotifyApi.getMyTopArtists({
      time_range: range ? range : "long_term",
    });
    dispatch({
      type: SPOTIFY_USER_ARTIST_SUCCESS,
      payload: topArtists.body.items,
    });
  } catch (err) {
    dispatch({ type: SPOTIFY_USER_ARTIST_FAILURE, payload: err.message });
  }
};
