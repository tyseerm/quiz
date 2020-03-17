import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

import {
  loadQuizzes,
  deleteQuiz, openQuizForm, closeQuizForm
} from "../../state/dashboard/DashboardActions";
import QuizCard from "./Quizzes/QuizCard";
import LoginLink from "../LoginLink";
import QuizFormModal from "./Quizzes/QuizFormModal";
import { Button } from "react-bootstrap";


const Dashboard = ({
  token = null,
  userId,
  quizzes,
  loaded,
  loadQuizzes,
  onDeleteQuiz,
  onEditQuiz,

}) => {
  useEffect(() => {
    if (token && userId && !loaded) loadQuizzes(token, userId);
  });
  if (!token) {
    return (
      <LoginLink />
    );
  } else {
    const newQuiz = {
      id: uuidv4(),
      user: userId,
      title: 'New Quiz',
      decription: '',
      active: false,
      level: 0,
      success_percentage: 50,
      show_results: true,
      questions: [],
      new: true
    }
    return (
      <div className="container">
        <Button onClick={() => onEditQuiz(newQuiz)}>Add Quiz</Button>
        {quizzes.map(quiz => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            onDelete={() => onDeleteQuiz(token, userId, quiz.id)}
            onEditQuiz={() => onEditQuiz(quiz)}
          />
        ))}
        <QuizFormModal />
      </div>
    );
  }
};

const mapStateToProps = ({ session, dashboard }) => {
  const { token, user = {} } = session;
  const userId = user.userId || null;
  const { quizzes, loaded } = dashboard;
  return {
    token,
    userId,
    quizzes,
    loaded
  };
};

const mapDispatchToProps = dispatch => ({
  loadQuizzes(token, userId) {
    dispatch(loadQuizzes({ token, userId }));
  },
  onDeleteQuiz(token, userId, quizId) {
    dispatch(deleteQuiz({ token, userId, quizId }));
  },
  onEditQuiz(quiz) {
    dispatch(openQuizForm({ selectedQuiz: quiz}));
  },
  onEditQuizClose() {
    dispatch(closeQuizForm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
