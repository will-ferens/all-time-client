import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/user.actions";

import styled from "styled-components";
import TopArtists from "./TopArtists/TopArtists";

const UserContainer = styled.section``;
const UserDetails = styled.div``;

const User = ({ dispatch, accessToken, user, artists }) => {
  useEffect(() => {
    dispatch(getUser(accessToken));
  }, []);
  return (
    <UserContainer>
      <UserDetails>
        <p>{user.display_name}</p>
      </UserDetails>
      <TopArtists artists={artists}></TopArtists>
    </UserContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    artists: state.userReducer.artists.items,
  };
};

export default connect(mapStateToProps, null)(User);
