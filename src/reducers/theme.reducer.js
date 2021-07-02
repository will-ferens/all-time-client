import { createReducer } from "@reduxjs/toolkit";
import { SEAWAVE, COFFEE, LAVENDER } from "../actions/theme.action";

const initialState = { theme: "seaWave" };

export const themeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SEAWAVE, (state, action) => {
      return { ...state, theme: action.payload };
    })
    .addCase(COFFEE, (state, action) => {
      return { ...state, theme: action.payload };
    })
    .addCase(LAVENDER, (state, action) => {
      return { ...state, theme: action.payload };
    });
});
