import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { login } from "../../actions/auth.actions";

import { bodyBackgroundColor } from "../../themes/themes";

import User from "../User/User";
import Login from "../Login/Login";

const code = new URLSearchParams(window.location.search).get("code");

const Container = styled.div`
  background-color: ${bodyBackgroundColor};
`;

const App = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const theme = useSelector((state) => state.themeReducer.theme);
  useEffect(() => {
    if (!accessToken && code) {
      dispatch(login(code));
      history.push("/");
    }
  }, [accessToken, dispatch, history]);

  return (
    <ThemeProvider theme={{ theme: theme }}>
      <Container>{accessToken ? <User /> : <Login />}</Container>
    </ThemeProvider>
  );
};

export default App;
