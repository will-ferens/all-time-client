import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { getTopArtists } from "../../actions/top_artists.actions";
import styled, { ThemeContext } from "styled-components";
import TopArtists from "./TopArtists/TopArtists";

import {
  highlightedFontColor,
  highlightedBackgroundColor,
  accentFontColor,
} from "../../themes/themes";

const UserContainer = styled.section`
  margin: 0 auto;
`;
const UserDetails = styled.div``;
//
const User = () => {
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const user = useSelector((state) => state.userReducer.user);
  const artists = useSelector((state) => state.userArtists.topArtists);

  useEffect(() => {
    dispatch(getUser(accessToken));
    dispatch(getTopArtists(accessToken));
  }, [accessToken, dispatch]);

  return (
    <UserContainer theme={themeContext}>
      <UserDetails>
        <p>{user.display_name}</p>
      </UserDetails>
      <TopArtists artists={artists} theme={themeContext} />
    </UserContainer>
  );
};

export default User;
