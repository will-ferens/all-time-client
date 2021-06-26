import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import {
  highlightedBackgroundColor,
  highlightedFontColor,
  accentFontColor,
} from "../../themes/themes";

export const HeaderContainer = styled.header`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 20px;
  background: ${highlightedBackgroundColor};
  color: ${highlightedFontColor};
`;
export const HeaderTitle = styled.h1`
  margin: 0;
`;
export const SubTitle = styled.h4`
  color: ${accentFontColor};
  margin: 0;
`;

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <HeaderContainer theme={themeContext}>
      <HeaderTitle>All Time</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
