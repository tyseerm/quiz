import React from "react";
import {useParams} from 'react-router';
//import { useHistory } from "react-router-dom";

import Question from "./Question";
import ProgressBar from "../../../../components/ProgressBar";
import Button from "../../../../components/Button";
//import { REESULTS_PAGE } from "../../pages";
import RegisterForm from "../../../../components/RegisterForm/RegisterForm";
import ScoreNotificationContainer from "../../../../components/Notifications/ScoreNotificationContainer";
import InvitationNotValidNotification from "../../../../components/Notifications/InvitationNotValidNotification";

const Questions = ({registered, quiz, attempts, actions, results }) => {
  const {invitationId}  = useParams()
  
  const onAttempt = (questionId, choiceId) => {
    actions.attemptQuestion({ [questionId]: choiceId });
  };
  const onSubmit = () => {
    actions.submitQuiz({attempts: {...attempts}, quizId: quiz.id});
  //  history.push(REESULTS_PAGE);
  };

  if(!registered){
    return <RegisterForm invitationId={invitationId} />
  }else if(results.submited && results.score){
    return <ScoreNotificationContainer />
  }else if(!quiz.id){
    return <InvitationNotValidNotification show='true' />
  }else{

  return (
    <>
      <ProgressBar />
      {quiz.questions.map(question => (
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
      }
};

export default Questions;
