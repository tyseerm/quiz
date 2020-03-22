import React from "react";
import { Card, InputGroup, Button } from "react-bootstrap";

export default ({token ,quiz, onDelete, onEditQuiz, onInvite }) => {
  const {
    title,
    description,
    level,
    success_percentage,
    active,
    show_results,
  } = quiz;
  const size = quiz.questions.length;
  return (
    <Card className="m-2">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Level: {level} </InputGroup.Text>
            <InputGroup.Text>
              Success percentage: {success_percentage}
            </InputGroup.Text>
            <InputGroup.Text>Number of questions: {size}</InputGroup.Text>
            <InputGroup.Text>Active: {active ? "Yes" : "No"}</InputGroup.Text>
            <InputGroup.Text>
              Show results: {show_results ? "Yes" : "No"}
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
        <label htmlFor="invite-email">Send the quiz to:</label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">Email</InputGroup.Text>
          </InputGroup.Prepend>
          <input
            className="w-50"
            id="invite-email"
            type="email"
            aria-describedby="basic-addon5"
          />
          <InputGroup.Append>
            <Button
              onClick={() =>
                onInvite(token, document.getElementById("invite-email").value, quiz.id)
              }
              variant="secondary"
            >
              Send
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup className="mb-3">
          <Button onClick={onDelete} className="m-1" variant="danger">
            Delete
          </Button>
          <Button onClick={onEditQuiz} className="m-1" variant="primary">
            Edit
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};
