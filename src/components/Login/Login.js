import React from "react";
import styled from "styled-components";
import { loginUrl } from "../../api/spotify";
const LoginContainer = styled.div``;
const LoginLink = styled.a``;

const Login = () => {
  return (
    <LoginContainer>
      <LoginLink href={loginUrl}>Login with Spotify</LoginLink>
    </LoginContainer>
  );
};

export default Login;
