import axios from "axios";
import spotify from "spotify-web-api-node";

export const SPOTIFY_TOKEN = "SPOTIFY_TOKEN";
export const SPOTIFY_USER_SUCCESS = "SPOTIFY_USER_SUCCESS";
export const SPOTIFY_USER_ARTIST_SUCCESS = "SPOTIFY_USER_ARTIST_SUCCESS";

export const SPOTIFY_LOGIN_BEGIN = "SPOTIFY_LOGIN_BEGIN";
export const SPOTIFY_LOGIN_SUCCESS = "SPOTIFY_LOGIN_SUCCESS";
export const SPOTIFY_LOGIN_FAILURE = "SPOTIFY_LOGIN_FAILURE";

const spotifyApi = new spotify({
  clientId: "4cf4914b17c340e68221b922b1d20336",
});

export const getUser = (code) => async (dispatch) => {
  dispatch({ type: SPOTIFY_LOGIN_BEGIN, payload: true });

  try {
    const response = await axios.post("http://localhost:9000/login", { code });

    dispatch({
      type: SPOTIFY_LOGIN_SUCCESS,
      payload: response.data.accessToken,
    });

    if (response.data.accessToken) {
      spotifyApi.setAccessToken(response.data.accessToken);
      try {
        const user = await spotifyApi.getMe();
        const topArtists = await spotifyApi.getMyTopArtists();

        dispatch({ type: SPOTIFY_USER_SUCCESS, payload: user.body });
        dispatch({
          type: SPOTIFY_USER_ARTIST_SUCCESS,
          payload: topArtists.body,
        });
      } catch (err) {
        dispatch({ type: SPOTIFY_LOGIN_FAILURE, payload: err.message });
      }
    }
  } catch (err) {
    dispatch({ type: SPOTIFY_LOGIN_FAILURE, payload: err.message });
  }
};
