import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { ThemesArray, highlightedBackgroundColor } from "../../themes/themes";
import { mediaQueries } from "../../constants/styles.js";
import ThemeButton from "./ThemeButton";

export const ThemeButtonsContainer = styled.div`
  padding: 0 20px;
  @media ${mediaQueries.laptop} {
    background: ${highlightedBackgroundColor};
  }
`;
const ThemeControls = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeButtonsContainer>
      {ThemesArray.map((theme) => {
        return (
          <ThemeButton
            key={theme.id}
            theme={theme}
            currentTheme={themeContext}
          />
        );
      })}
    </ThemeButtonsContainer>
  );
};

export default ThemeControls;
