import React from "react";
import  Notification from "./Notification";
const LoginFailedNotification = ({show}) => (
    <Notification
          show={show}
          type="danger"
          message="Login failed"
          details="Plase enter a valid username and password"
        />
)

export default LoginFailedNotification