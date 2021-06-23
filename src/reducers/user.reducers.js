import {
  SPOTIFY_USER_BEGIN,
  SPOTIFY_USER_SUCCESS,
  SPOTIFY_USER_FAILURE,
} from "../actions/user.actions";

const initialState = {
  loading: "idle",
  error: null,
  user: {},
  artists: [],
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_USER_BEGIN:
      return {
        ...state,
        loading: action.payload,
      };
    case SPOTIFY_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: "fetched",
      };
    case SPOTIFY_USER_FAILURE:
      return { ...state, error: action.payload, loading: "failed" };
    default:
      return state;
  }
}
