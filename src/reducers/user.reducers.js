import {
  SPOTIFY_USER_SUCCESS,
  SPOTIFY_USER_ARTIST_SUCCESS,
  SPOTIFY_USER_FAILURE,
} from "../actions/user.actions";

const initialState = {
  error: null,
  user: null,
  artists: null,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SPOTIFY_USER_ARTIST_SUCCESS:
      return { ...state, artists: action.payload };
    case SPOTIFY_USER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
