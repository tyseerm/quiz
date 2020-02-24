import React from "react";
import {Redirect} from 'react-router';
import { QUIZ_PAGE } from "../routes";

const Notification = ({ show, type, message, details }) => {
  if (show) {
    return (
      <div className={"alert alert-" + type} role="alert">
        <strong>{message}</strong> {details}
      </div>
    );
  } else {
       return <Redirect to={QUIZ_PAGE} />
      
  }
};

export default Notification;
