import React from "react";
import styled from "styled-components";
import { accentFontColor } from "../../themes/themes";
import Header from "../Header/Header";
import ThemeControls from "./ThemeControls";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${accentFontColor};
`;

export const ActionsList = styled.ul``;

const Nav = () => {
  return (
    <NavContainer>
      <Header />
      <ActionsList></ActionsList>
      <ThemeControls />
    </NavContainer>
  );
};

export default Nav;
