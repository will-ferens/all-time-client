import React, { useEffect } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const UserContainer = styled.main``;

const User = (props) => {
  useEffect(() => {
    console.log(props);
  });
  return <UserContainer></UserContainer>;
};

export default connect((state) => state)(User);
