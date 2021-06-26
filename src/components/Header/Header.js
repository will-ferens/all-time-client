import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

import {
  highlightedBackgroundColor,
  highlightedFontColor,
  accentFontColor,
} from "../../themes/themes";

export const HeaderContainer = styled.header`
  background: ${highlightedBackgroundColor};
  color: ${highlightedFontColor};
`;
export const HeaderTitle = styled.h1``;
export const SubTitle = styled.h4`
  color: ${accentFontColor};
`;

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <HeaderContainer theme={themeContext}>
      <HeaderTitle>All Time</HeaderTitle>
      <SubTitle>Who's your all time?</SubTitle>
    </HeaderContainer>
  );
};

export default Header;
