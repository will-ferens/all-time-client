import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth.actions";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const UserContainer = styled.section``;

const User = (props) => {
  const { params, authReducer } = props;
  let history = useHistory();

  useEffect(() => {
    const { dispatch } = props;
    dispatch(getUser(params));
    history.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return <UserContainer>Howdy</UserContainer>;
};

export default connect((state) => state)(User);
