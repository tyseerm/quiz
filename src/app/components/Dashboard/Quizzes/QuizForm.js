import React from "react";
import { Form, ListGroup, Button } from "react-bootstrap";
import QuestionForm from "./Question/QuestionForm";

const QuizForm = ({
  title,
  description,
  active,
  show_results,
  level,
  questions,
  success_percentage,
  handleChange,
  handleQuestionChange,
  handleAddQuestion
}) => {
  return (
    <Form className="text-center border border-light p-5" action="#!">
      <Form.Group>
        <Form.Label>Title</Form.Label>

        <Form.Control
          onChange={handleChange}
          type="text"
          name="title"
          className="form-control mb-4"
          placeholder="Title"
          value={title}
        />

        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={handleChange}
          className="form-control rounded-0"
          name="description"
          rows="3"
          placeholder="Description"
          value={description}
          as="textarea"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Level: {`${level}`}</Form.Label>
        <Form.Control
          type="range"
          onChange={handleChange}
          className="custom-range"
          name="level"
          min="0"
          max="10"
          step="1"
          value={level}
        />
        <Form.Label>Success Percentage: {`${success_percentage}%`}</Form.Label>
        <Form.Control
          type="range"
          onChange={handleChange}
          className="custom-range"
          id="successPercentageRange"
          name="success_percentage"
          min="25"
          step="5"
          value={success_percentage}
        />
      </Form.Group>
      <Form.Group>
        <ListGroup horizontal>
          <ListGroup.Item>
            <Form.Check
              type="checkbox"
              label="Active"
              onChange={handleChange}
              name="active"
              checked={active}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="checkbox"
              label="Show Results"
              onChange={handleChange}
              name="show_results"
              checked={show_results}
            />
          </ListGroup.Item>
        </ListGroup>
        
      </Form.Group>
      
      {questions.map((question => <QuestionForm key={question.id} {...question} handleChange={handleQuestionChange} />))}
      <Button onClick={handleAddQuestion}>Add Question</Button>
    </Form>
  );
};

export default QuizForm;
