import React from "react";
import {Redirect} from 'react-router';
import { useHistory } from "react-router-dom";

import Question from "./Question";
import ProgressBar from "../ProgressBar";
import Button from "../../elements/Button";

const Questions = ({registered, questions, attempts, actions }) => {
  const onAttempt = (questionId, choiceId) => {
    actions.attemptQuestion({ [questionId]: choiceId });
  };
  let history = useHistory();
  const onSubmit = () => {
    actions.submitQuiz({...attempts});
    history.push('/results');
  };

  if(!registered){
    return <Redirect to='/' />
  }

  return (
    <>
      <ProgressBar />
      {questions.map(question => (
        <Question
          question={question}
          attempted={attempts[question.id] ? attempts[question.id] : ""}
          onAttempt={onAttempt}
          key={question.id}
        />
      ))}
      <Button value="Submit" onClick={onSubmit} />
    </>
  );
};

export default Questions;