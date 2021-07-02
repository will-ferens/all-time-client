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
  {
    id: "lavender",
    name: "lavender",
    primaryColor: "#4c32df",
  },
];

export const bodyBackgroundColor = theme("theme", {
  coffee: "#E6D9C8",
  seaWave: "#F5FFFD",
  lavender: "#f5f5ff",
});

export const highlightedBackgroundColor = theme("theme", {
  coffee: "#cec5be",
  seaWave: "#eff4fb",
  lavender: "#f1eeff",
});

export const highlightedBorder = theme("theme", {
  coffee: "#fff",
  seaWave: "#c7d1ff",
  lavender: "#c7d1ff",
});

export const highlightedFontColor = theme("theme", {
  coffee: "#471948",
  seaWave: "#000098",
  lavender: "#4c32df",
});

export const accentFontColor = theme("theme", {
  coffee: "#fff",
  seaWave: "#fff",
  lavender: "#fff",
});

export const secondaryFontColor = theme("theme", {
  coffee: "#d9ccc9",
});
