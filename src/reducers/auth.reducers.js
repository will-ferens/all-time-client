import {
  SPOTIFY_TOKEN,
  SPOTIFY_LOGIN_BEGIN,
  SPOTIFY_LOGIN_SUCCESS,
  SPOTIFY_LOGIN_FAILURE,
} from "../actions/auth.actions";

const initialState = {
  loading: false,
  accessToken: null,
  refreshToken: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_LOGIN_BEGIN:
      return {
        ...state,
        loading: action.payload,
      };
    case SPOTIFY_LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        loading: false,
      };
    case SPOTIFY_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    case SPOTIFY_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
