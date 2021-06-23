import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../actions/auth.actions";

import User from "../User/User";
import Login from "../Login/Login";

const code = new URLSearchParams(window.location.search).get("code");

class App extends Component {
  componentDidMount() {
    if (!this.props.authReducer.accessToken) {
      this.props.dispatch(login(code));
      this.props.history.push("/");
    }
  }
  renderUserDashboard() {
    if (this.props.authReducer.accessToken) {
      const { accessToken } = this.props.authReducer;
      return <User accessToken={accessToken} />;
    } else {
      return <Login />;
    }
  }
  render() {
    return <div className="App">{this.renderUserDashboard()}</div>;
  }
}

export default connect((state) => state)(App);
