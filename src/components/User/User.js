import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { getTopArtists } from "../../actions/top_artists.actions";
import { getTopTracks } from "../../actions/top_tracks.actions";
import styled, { ThemeContext } from "styled-components";
import TopList from "./TopList/TopList";

const UserContainer = styled.section`
  width: 100%;
  overflow: scroll;
`;

const User = () => {
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const artists = useSelector((state) => state.userArtists.topArtists);
  const tracks = useSelector((state) => state.userTopTracks.topTracks);
  const userTopLists = [
    {
      id: "topArtists",
      name: "Artists",
      list: artists,
    },
    {
      id: "topTracks",
      name: "Tracks",
      list: tracks,
    },
    {
      id: "topGenres",
      name: "Genres",
      list: [],
    },
  ];
  useEffect(() => {
    dispatch(getUser(accessToken));
    dispatch(getTopArtists(accessToken));
    dispatch(getTopTracks(accessToken));
  }, [accessToken, dispatch]);

  return (
    <UserContainer theme={themeContext}>
      {userTopLists.map((group) => {
        return (
          <TopList listInfo={group} list={group.list} theme={themeContext} />
        );
      })}
    </UserContainer>
  );
};

export default User;
