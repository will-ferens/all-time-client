import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { loginUrl } from "../../api/spotify";

import { highlightedFontColor, accentFontColor } from "../../themes/themes";

export const LoginContainer = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <LoginWrapper>
        <CtaHeader>Your Spotify Stats.</CtaHeader>
        <p>Get stats about your top artists, tracks, and genres.</p>
        <LoginLink href={loginUrl}>Login with Spotify</LoginLink>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
