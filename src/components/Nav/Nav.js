import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import ThemeControls from "./ThemeControls";
import { highlightedBorder } from "../../themes/themes";
import { border } from "../../constants/styles";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: ${border} ${highlightedBorder};
`;

const Nav = () => {
  return (
    <NavContainer>
      <Header />
      <ThemeControls />
    </NavContainer>
  );
};

export default Nav;
