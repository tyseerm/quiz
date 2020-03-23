import React from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { LOGIN_PAGE } from "../../../../pages";
export default () => {
  const history = useHistory();
return (
  <Alert variant="warning">
    Sorry you should login first{" "}
      <Alert.Link href="#" onClick={(e) => {e.preventDefault(); history.push(LOGIN_PAGE)}}>Click here to login</Alert.Link>
    . Thanks!
  </Alert>
);
}