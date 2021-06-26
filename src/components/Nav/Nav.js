import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const ActionsList = styled.ul``;

const Nav = () => {
  return (
    <NavContainer>
      <Header />
      <ActionsList></ActionsList>
    </NavContainer>
  );
};

export default Nav;
