import {
  SPOTIFY_USER_ARTIST_BEGIN,
  SPOTIFY_USER_ARTIST_SUCCESS,
  SPOTIFY_USER_ARTIST_FAILURE,
} from "../actions/top_artists.actions";

const initialState = {
  loading: "idle",
  topArtists: [],
  error: null,
};

export default function userArtists(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_USER_ARTIST_BEGIN:
      return {
        ...state,
        loading: "fetching",
      };
    case SPOTIFY_USER_ARTIST_SUCCESS:
      return {
        ...state,
        topArtists: action.payload,
        loading: "fetched",
      };
    case SPOTIFY_USER_ARTIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: "failed",
      };
    default:
      return state;
  }
}
