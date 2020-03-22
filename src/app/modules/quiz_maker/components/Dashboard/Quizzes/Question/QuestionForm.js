import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import ChoiceForm from "./ChoiceForm";

const QuestionForm = ({ title, handleChange, choices, answer, id }) => {
  return (
    <Card className="m-2 p-2">
      <Form.Group>
        <Form.Control
          onChange={(e) => handleChange(e, {questionId: id})}
          type="text"
          name="title"
          className="form-control mb-4"
          placeholder="Title"
          value={title}
        />
        {choices.map((choice => (<ChoiceForm handleChange={handleChange} key={choice.id} {...choice} questionId={id} answer={answer} />)))}
       <Button onClick={(e) => handleChange(e, {questionId: id, addChoice: true})}>Add Choice</Button>
      </Form.Group>
    </Card>
  );
};

export default QuestionForm;
