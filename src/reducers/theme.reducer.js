import { SEAWAVE } from "../actions/theme.action";

const initialState = { theme: "default" };

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SEAWAVE:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
