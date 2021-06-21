import axios from "axios";

export const SPOTIFY_TOKEN = "SPOTIFY_TOKEN";

export const SPOTIFY_LOGIN_BEGIN = "SPOTIFY_LOGIN_BEGIN";
export const SPOTIFY_LOGIN_SUCCESS = "SPOTIFY_LOGIN_SUCCESS";
export const SPOTIFY_LOGIN_FAILURE = "SPOTIFY_LOGIN_FAILURE";

export const login = (code) => async (dispatch) => {
  dispatch({ type: SPOTIFY_LOGIN_BEGIN, payload: true });

  const response = await axios.post("http://localhost:9000/login", { code });

  try {
    dispatch({
      type: SPOTIFY_LOGIN_SUCCESS,
      payload: response.data.accessToken,
    });
    dispatch({
      type: SPOTIFY_TOKEN,
      payload: response.data.refreshToken,
    });
  } catch (err) {
    dispatch({ type: SPOTIFY_LOGIN_FAILURE, payload: err.message });
  }
};
