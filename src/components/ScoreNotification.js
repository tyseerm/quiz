import React from "react";

const Notification = ({ type, message, details }) => (
  <div className={"alert alert-" + type} role="alert">
    <strong>{message}</strong> {details}
  </div>
);

const ScoreNotification = ({ type, message, details }) => (
      <Notification type={type} message={message} details={details} />
);

export default ScoreNotification;
