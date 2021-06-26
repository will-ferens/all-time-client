import { SEAWAVE, COFFEE } from "../actions/theme.action";

const initialState = { theme: "coffee" };

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SEAWAVE:
      return { ...state, theme: action.payload };
    case COFFEE:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
