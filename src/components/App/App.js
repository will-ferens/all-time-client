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
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const theme = useSelector((state) => state.themeReducer.theme);

  let history = useHistory();
  useEffect(() => {
    if (!accessToken && code) {
      dispatch(login(code));
      history.push("/");
    }
  }, [accessToken, dispatch, history]);

  return (
    <ThemeProvider theme={{ theme: theme }}>
      <Container navLayout={accessToken ? true : false}>
        {accessToken ? <Nav /> : null}
        {accessToken ? <User /> : <Login />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
