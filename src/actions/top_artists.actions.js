import spotify from "spotify-web-api-node";

export const SPOTIFY_USER_ARTIST_SUCCESS = "SPOTIFY_USER_ARTIST_SUCCESS";

export const spotifyApi = new spotify({
  clientId: "4cf4914b17c340e68221b922b1d20336",
});

export const getTopArtists = (accessToken, range) => async (dispatch) => {
  try {
    spotifyApi.setAccessToken(accessToken);
    const topArtists = await spotifyApi.getMyTopArtists({
      time_range: range ? range : "long_term",
    });
    dispatch({
      type: SPOTIFY_USER_ARTIST_SUCCESS,
      payload: topArtists.body,
    });
  } catch (err) {}
};
