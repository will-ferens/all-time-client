import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { loginUrl } from "../../api/spotify";

import {
  highlightedFontColor,
  secondaryFontColor,
  highlightedBackgroundColor,
} from "../../themes/themes";

export const LoginContainer = styled.div`
  width: 100%;
  p {
    margin: 0 0 32px 0;
  }
`;

export const TopBar = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${highlightedBackgroundColor};
`;

export const CtaHeader = styled.h1``;
export const LoginLink = styled.a`
  border-radius: 4px;
  padding: 1rem 2.5rem;
  background-color: ${highlightedFontColor};
  color: ${secondaryFontColor};
`;

const Login = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <LoginContainer theme={themeContext}>
      <TopBar />
      <CtaHeader>Your Spotify Stats.</CtaHeader>
      <p>Get stats about your top artists, tracks, and genres.</p>
      <LoginLink href={loginUrl}>Login with Spotify</LoginLink>
    </LoginContainer>
  );
};

export default Login;
