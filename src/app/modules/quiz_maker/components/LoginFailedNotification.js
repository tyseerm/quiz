import React from "react";
import  Notification from "../../../commons/components/Notifications/Notification";
const LoginFailedNotification = ({show}) => (
    <Notification
          show={show}
          type="danger"
          message="Login failed"
          details="Plase enter a valid username and password"
        />
)

export default LoginFailedNotification