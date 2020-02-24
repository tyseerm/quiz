import React from "react";

export default ({ value, onClick, type = "button" }) => (
  <div className="m-3 p-3 d-flex justify-content-center">
    <button type={type} className="btn btn-primary" onClick={onClick}>
      {value}
    </button>
  </div>
);
