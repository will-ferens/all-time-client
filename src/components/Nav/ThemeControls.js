import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { ThemesArray } from "../../themes/themes";
import ThemeButton from "./ThemeButton";

export const ThemeButtonsContainer = styled.div``;
const ThemeControls = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeButtonsContainer>
      <p>Themes</p>
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
