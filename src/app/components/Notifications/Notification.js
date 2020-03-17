import React from "react";

const Notification = ({ show, type, message, details }) => {
  if (show) {
    return (
      <div className={"alert alert-" + type} role="alert">
        <h4 className="alert-heading">{message}</h4>
        {details}
      </div>
    );
  } else {
       return null
      
  }
};

export default Notification;
