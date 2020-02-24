import React from "react";
import {Redirect} from 'react-router';

const Notification = ({ show, type, message, details }) => {
  if (show) {
    return (
      <div className={"alert alert-" + type} role="alert">
        <strong>{message}</strong> {details}
      </div>
    );
  } else {
       return <Redirect to='/quiz' />
      
  }
};

export default Notification;
