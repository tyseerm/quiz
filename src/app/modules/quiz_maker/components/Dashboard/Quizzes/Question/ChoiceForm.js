import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const ChoiceForm = ({value, id, answer, questionId, handleChange} ) => {

  return (
    <InputGroup className='m-2'>
      <InputGroup.Prepend>
        <InputGroup.Radio onChange={ (e) => handleChange(e, {questionId, answer: id})} name={`${questionId}-radio`} aria-label="Radio button for following text input" defaultChecked={(id === answer ? true : false)} />
      </InputGroup.Prepend>
      <Form.Control onChange={(e) => handleChange(e, {questionId, choiceId: id})} aria-label="Text input with radio button"  value={value} />
      <InputGroup.Append>
      <Button onClick={(e) => handleChange(e, {deleteChoice:true, questionId, choiceId: id})} className='btn-danger'>X</Button>
    </InputGroup.Append>
    </InputGroup>
  );
};

export default ChoiceForm;