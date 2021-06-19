import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth.actions";
import styled from "styled-components";

const UserContainer = styled.main``;

const User = (props) => {
  const { params } = props;
  console.log(props);
  useEffect(() => {
    const { dispatch } = props;
    dispatch(getUser(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return <UserContainer></UserContainer>;
};

export default connect((state) => state)(User);
