import theme from "styled-theming";

export const ThemesArray = [
  {
    id: "coffee",
    name: "coffee",
    primaryColor: "#471948",
  },
  {
    id: "seaWave",
    name: "sea wave",
    primaryColor: "#000098",
  },
];

export const bodyBackgroundColor = theme("theme", {
  coffee: "#E6D9C8",
  seaWave: "#F5FFFD",
});

export const highlightedBackgroundColor = theme("theme", {
  coffee: "#cec5be",
  seaWave: "#d1d8fa",
});

export const highlightedBorder = theme("theme", {
  coffee: "#936094",
});

export const highlightedFontColor = theme("theme", {
  coffee: "#471948",
  seaWave: "#000098",
});

export const accentFontColor = theme("theme", {
  coffee: "#fff",
  seaWave: "#3111b1",
});

export const secondaryFontColor = theme("theme", {
  coffee: "#d9ccc9",
});
