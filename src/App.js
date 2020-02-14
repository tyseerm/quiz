import React, { useState } from "react";

import Header from "./components/Header";
import Question from "./components/Question";
import ProgressBar from "./components/ProgressBar";
import ScoreNotification from "./components/ScoreNotification";

import testQuestions from "./store/questions";
import testAnswers from "./store/answers";

function App() {
  const [attempts, setAttempts] = useState({});
  const [score, setScore] = useState({});

  const attempPercentage = (
    (Object.keys(attempts).length / testQuestions.length) *
    100
  ).toFixed(0);

  const onAttempt = (questionId, choiceId) => {
    setAttempts({ ...attempts, [questionId]: choiceId });
  };

  const onSubmit = () => {
    let correctAnswers = 0;
    for (let questionId in testAnswers) {
      if (
        attempts[questionId] &&
        attempts[questionId] === testAnswers[questionId]
      ) {
        correctAnswers++;
      }
    }
    const successPercentage = (
      (correctAnswers / testQuestions.length) *
      100
    ).toFixed(0);
    let newScore = {};
    newScore.show = true;
    if (successPercentage == 100) {
      newScore.type = "success";
      newScore.message = "Awesome!";
      newScore.details = "You achived full score";
    } else if (successPercentage < 100 && successPercentage >= 50) {
      newScore.type = "info";
      newScore.message = "Congratulations!";
      newScore.details = `You passed with ${successPercentage}%`;
    } else {
      newScore.type = "danger";
      newScore.message = "Sorry!";
      newScore.details = `You didn't pass, your score is ${successPercentage}%`;
    }
    setScore(newScore);
    console.log("successPercentage!!", successPercentage);
  };

  return (
    <div className="container">
      <Header />
      <ProgressBar percentage={attempPercentage} />
      {testQuestions.map(question => (
        <Question
          attempted={attempts[question.id] ? attempts[question.id] : ""}
          onAttempt={onAttempt}
          key={question.id}
          question={question}
        />
      ))}
      <div className="container">
        <div className="row">
          <div className="col-2">
            <button onClick={onSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col-10">
            {score.show ? (
              <ScoreNotification
                type={score.type}
                message={score.message}
                details={score.details}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
