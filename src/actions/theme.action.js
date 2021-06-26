export const SEAWAVE = "seaWave";
export const COFFEE = "coffee";

export const setTheme = (theme) => {
  return {
    type: theme,
    payload: theme,
  };
};
