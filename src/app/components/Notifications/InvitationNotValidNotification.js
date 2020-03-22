import React from "react";
import  Notification from "./Notification";
const InvitationNotValidNotification = ({show}) => (
    <Notification
          show={show}
          type="danger"
          message="Your invitation is not valid"
          details="Please make sure you submitted the valid invitation ID"
        />
)

export default InvitationNotValidNotification