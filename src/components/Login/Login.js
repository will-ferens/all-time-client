import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { loginUrl } from "../../api/spotify";

import {
  highlightedFontColor,
  secondaryFontColor,
  highlightedBackgroundColor,
  accentFontColor,
} from "../../themes/themes";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBar = styled.div`
  height: 75px;
  width: 100%;
  background-color: ${highlightedBackgroundColor};
`;

export const LoginWrapper = styled.div`
  p {
    margin: 0 0 32px 0;
  }
`;
export const CtaHeader = styled.h1`
  color: ${highlightedFontColor};
`;
export const LoginLink = styled.a`
  border-radius: 4px;
  padding: 1rem 2.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  background-color: ${highlightedFontColor};
  border: 2px solid ${highlightedFontColor};
  color: ${accentFontColor};
  &:hover {
    background-color: ${accentFontColor};
    color: ${highlightedFontColor};
  }
`;

const Login = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <LoginContainer theme={themeContext}>
      <TopBar />
      <LoginWrapper>
        <CtaHeader>Your Spotify Stats.</CtaHeader>
        <p>Get stats about your top artists, tracks, and genres.</p>
        <LoginLink href={loginUrl}>Login with Spotify</LoginLink>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
