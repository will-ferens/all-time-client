import axios from "axios";
import spotify from "spotify-web-api-node";

export const SPOTIFY_TOKEN = "SPOTIFY_TOKEN";

export const SPOTIFY_USER_BEGIN = "SPOTIFY_USER_BEGIN";
export const SPOTIFY_USER_SUCCESS = "SPOTIFY_USER_SUCCESS";
export const SPOTIFY_USER_FAILURE = "SPOTIFY_USER_FAILURE";

const spotifyApi = new spotify({
  clientId: "4cf4914b17c340e68221b922b1d20336",
});

export function setToken({ accessToken }) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKEN, payload: accessToken };
}

export const getUser = (code) => async (dispatch) => {
  dispatch({ type: SPOTIFY_USER_BEGIN, payload: true });

  try {
    const response = await axios.post("http://localhost:9000/login", { code });

    dispatch({ type: SPOTIFY_USER_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: SPOTIFY_USER_FAILURE, payload: err.message });
  }
};
