import { createAction } from "@reduxjs/toolkit";

export const SEAWAVE = createAction("seaWave");
export const COFFEE = createAction("coffee");
export const LAVENDER = createAction("lavender");

export const setTheme = (theme) => {
  return {
    type: theme,
    payload: theme,
  };
};
