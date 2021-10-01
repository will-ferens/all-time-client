import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { login } from "../../actions/auth.actions";
import { bodyBackgroundColor } from "../../themes/themes";
import { mediaQueries } from "../../constants/styles";

import Nav from "../Nav/Nav";
import User from "../User/User";
import Login from "../Login/Login";
import LoadingSpinner from "../Lib/LoadingSpinner";
// URL param on new login
const code = new URLSearchParams(window.location.search).get("code");

const Container = styled.div`
  display: grid;
  background-color: ${bodyBackgroundColor};
  ${({ navLayout }) =>
    !navLayout &&
    `
    justify-content: center;
    align-content: center;
    height: 100vh;
  `}
  ${({ navLayout }) =>
    navLayout &&
    `
    height: 100vh;
    width: 100vw;
    grid-template-columns: minmax(150px, 25%) 1fr;
    align-items: inherit;
    justify-content: inherit;
    @media ${mediaQueries.laptop} {
      height: auto;
      width: auto;
      display: block;
    }
  `};
`;

const App = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.authReducer.loading);
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const error = useSelector((state) => state.authReducer.error);
  const theme = useSelector((state) => state.themeReducer.theme);
  let history = useHistory();
  let content;

  useEffect(() => {
    if (!accessToken && code) {
      dispatch(login(code));
      history.push("/");
    }
  }, [accessToken, dispatch, history]);
  if (loginStatus === "idle") {
    content = (
      <Container navLayout={false}>
        <Login />
      </Container>
    );
  } else if (loginStatus === "loading") {
    content = (
      <Container navLayout={false}>
        <LoadingSpinner />
      </Container>
    );
  } else if (loginStatus === "fetched" && accessToken) {
    content = (
      <Container navLayout={true}>
        <Nav />
        <User />
      </Container>
    );
  } else if (loginStatus === "failed") {
    content = (
      <Container navLayout={false}>
        <div>{error}</div>
      </Container>
    );
  }
  return <ThemeProvider theme={{ theme: theme }}>{content}</ThemeProvider>;
};

export default App;
