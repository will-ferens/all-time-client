import { SEAWAVE, COFFEE } from "../actions/theme.action";

const initialState = { theme: "seaWave" };

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
