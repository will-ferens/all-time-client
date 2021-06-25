import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { getTopArtists } from "../../actions/top_artists.actions";

import styled from "styled-components";
import TopArtists from "./TopArtists/TopArtists";

const UserContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
`;
const UserDetails = styled.div``;
//
const User = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const user = useSelector((state) => state.userReducer.user);
  const artists = useSelector((state) => state.userArtists.topArtists);

  useEffect(() => {
    dispatch(getUser(accessToken));
    dispatch(getTopArtists(accessToken));
  }, [accessToken, dispatch]);

  return (
    <UserContainer>
      <UserDetails>
        <p>{user.display_name}</p>
      </UserDetails>
      <TopArtists artists={artists} />
    </UserContainer>
  );
};

export default User;
