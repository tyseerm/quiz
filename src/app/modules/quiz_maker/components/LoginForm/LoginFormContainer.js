import React from "react";
import { connect } from "react-redux";
import {
  loginFormCompleted,
  loginFormUpdated
} from "../../state/loginForm/LoginFormActions";
import { Redirect } from "react-router";
import { DASHBOARD_PAGE } from "../../../../pages";
import {LoginForm} from './LoginForm'
const LoginFormContainer = ({
  password,
  username,
  loginFormUpdated,
  loginFormCompleted,
  loginSuccess,
  loginFailed
}) => {
  if (loginSuccess) {
    return <Redirect to={DASHBOARD_PAGE} />;
  } else {
    return (
      <LoginForm
        password={password}
        username={username}
        loginFailed={loginFailed}
        loginFormCompleted={loginFormCompleted}
        loginFormUpdated={loginFormUpdated}
      />
    );
  }
};

const mapStateToProps = ({ loginForm }) => {
  const { username, password, loginSuccess, loginFailed } = loginForm;
  return {
    username,
    password,
    loginSuccess,
    loginFailed
  };
};

const mapDispatchToProps = dispatch => ({
  loginFormUpdated(event) {
    const target = event.target;
    const payload = { [target.name]: target.value };
    dispatch(loginFormUpdated(payload));
  },
  loginFormCompleted(e) {
    e.preventDefault();

    dispatch(
      loginFormCompleted({
        username: e.target["username"].value,
        password: e.target["password"].value
      })
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
