import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopArtists } from "../../actions/top_artists.actions";
import { getTopTracks } from "../../actions/top_tracks.actions";
import styled from "styled-components";
import TopList from "./TopList/TopList";

const UserContainer = styled.section`
  width: 100%;
  overflow: scroll;
`;

const User = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const artists = useSelector((state) => state.userTopArtists.topArtists);
  const tracks = useSelector((state) => state.userTopTracks.topTracks);
  const userTopLists = [
    {
      id: "topArtists",
      name: "Artists",
      fetchList: getTopArtists,
      token: accessToken,
      list: artists,
    },
    {
      id: "topTracks",
      name: "Tracks",
      fetchList: getTopTracks,
      token: accessToken,
      list: tracks,
    },
  ];
  useEffect(() => {
    dispatch(getTopArtists(accessToken));
    dispatch(getTopTracks(accessToken));
  }, [accessToken, dispatch]);

  return (
    <UserContainer>
      {userTopLists.map((group) => {
        return <TopList key={group.id} listInfo={group} list={group.list} />;
      })}
    </UserContainer>
  );
};

export default User;
