import {
  SPOTIFY_USER_BEGIN,
  SPOTIFY_USER_SUCCESS,
  SPOTIFY_USER_FAILURE,
} from "../actions/auth.actions";

const initialState = {
  loading: false,
  accessToken: null,
  error: null,
};

// prettier-ignore
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_USER_BEGIN:
      return {
        ...state,
        load: action.payload
      }
    case SPOTIFY_USER_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        loading: false
      };
    case SPOTIFY_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
