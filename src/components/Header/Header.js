import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.header``;
export const HeaderTitle = styled.h1``;
export const SubTitle = styled.h4``;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>All Time</HeaderTitle>
      <SubTitle>Who's your all time?</SubTitle>
    </HeaderContainer>
  );
};

export default Header;
