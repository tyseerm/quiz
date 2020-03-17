import React from "react";
import { DASHBOARD_PAGE } from "../../../pages";
import { Link } from "react-router-dom";
import LoginLink from "../../LoginLink";
import { connect } from "react-redux";
import QuizForm from "./QuizForm";

const Quiz = ({ token }) => {
  if (!token) {
    return <LoginLink />;
  } else {
    return (
      <div className="container">
        <Link to={DASHBOARD_PAGE}>
          <button className="btn btn-primary">Dashboard</button>
        </Link>
        <QuizForm />
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

export default connect(mapStateToProps)(Quiz);
