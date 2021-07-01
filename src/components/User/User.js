import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { getTopArtists } from "../../actions/top_artists.actions";
import styled, { ThemeContext } from "styled-components";
import TopList from "./TopList/TopList";

const userTopLists = [
  {
    id: "topArtists",
  },
  {
    id: "topTracks",
  },
  {
    id: "topGenres",
  },
];
const UserContainer = styled.section`
  width: 100%;
  overflow: scroll;
`;

const User = () => {
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const artists = useSelector((state) => state.userArtists.topArtists);

  useEffect(() => {
    dispatch(getUser(accessToken));
    dispatch(getTopArtists(accessToken));
  }, [accessToken, dispatch]);

  return (
    <UserContainer theme={themeContext}>
      <TopList artists={artists} theme={themeContext} />
    </UserContainer>
  );
};

export default User;
