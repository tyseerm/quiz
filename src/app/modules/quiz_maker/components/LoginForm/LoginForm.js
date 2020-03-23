import React from "react";
import Button from "../../../../commons/components/Button";
import LoginFailedNotification from "../LoginFailedNotification";
export const LoginForm = ({
  password,
  username,
  loginFormUpdated,
  loginFormCompleted,
  loginFailed
}) =>  (
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
