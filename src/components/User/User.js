import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/user.actions";
import { getTopArtists } from "../../actions/top_artists.actions";

import styled from "styled-components";
import TopArtists from "./TopArtists/TopArtists";

const UserContainer = styled.section``;
const UserDetails = styled.div``;
//
const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const accessToken = useSelector((state) => state.accessToken);

  useEffect(() => {
    dispatch(getUser(accessToken));
  }, []);

  return (
    <UserContainer>
      <UserDetails>
        <p>{user.display_name}</p>
      </UserDetails>
      <TopArtists />
    </UserContainer>
  );
};

export default User;
