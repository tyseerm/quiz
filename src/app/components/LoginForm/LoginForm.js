import React from "react";
import { connect } from "react-redux";
import Button from "../Button";
import {
  loginFormCompleted,
  loginFormUpdated
} from "../../state/loginForm/LoginFormActions";
import LoginFailedNotification from "../Notifications/LoginFailedNotification";
import { Redirect } from "react-router";
import { DASHBOARD_PAGE } from "../../pages";
const RegisterForm = ({
  password,
  username,
  loginFormUpdated,
  loginFormCompleted,
  loginSuccess = false,
  loginFailed = false
}) => {
  if (loginSuccess) {
    return <Redirect to={DASHBOARD_PAGE} />;
  } else {
    return (
      <form
        onSubmit={e => {
          loginFormCompleted(e);
        }}
        method="post"
      >
        <div className="m-3 p-3 d-flex justify-content-center">
          <h2>Please login to create and manage your quizzes</h2>
        </div>
        <div className="form-group row">
          <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputUsername3"
              placeholder="Username"
              name="username"
              onChange={loginFormUpdated}
              value={username}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputName3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputName3"
              placeholder="Password"
              name="password"
              onChange={loginFormUpdated}
              value={password}
              required
            />
          </div>
        </div>

        <LoginFailedNotification show={loginFailed} />
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <Button value="Login" type="submit" />
          </div>
        </div>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
