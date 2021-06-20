import {
  SPOTIFY_LOGIN_BEGIN,
  SPOTIFY_LOGIN_SUCCESS,
  SPOTIFY_LOGIN_FAILURE,
  SPOTIFY_USER_SUCCESS,
} from "../actions/auth.actions";

const initialState = {
  loading: false,
  accessToken: null,
  error: null,
  user: null,
};

// prettier-ignore
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_LOGIN_BEGIN:
      return {
        ...state,
        loading: action.payload
      }
    case SPOTIFY_LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        loading: false
      };
    case SPOTIFY_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case SPOTIFY_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
