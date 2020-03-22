import React, {useContext} from "react";
import {connect} from 'react-redux';
import { ConfigContext } from './../config';



const ProgressBar = ({ percentage}) => {
  const context = useContext(ConfigContext);
  percentage = isNaN(percentage) ? 0 : percentage;
  return !context.showProgressBar ? null : (
  <div className="card m-3 p-3 sticky-top border-dark">
    <h4 className="crard-title">Your progress:</h4>
    <div className="progress">
      <div className="progress-bar" style={{ width: percentage + "%" }}>
        {percentage}%
      </div>
    </div>
  </div>
)};

const mapStateToProps = state => {
  const attemptsCount = Object.keys(state.attempts).length;
  const questionsCount = state.quiz.questions.length;
  return { percentage: Math.round((attemptsCount / questionsCount) * 100)};
};

export default connect(mapStateToProps)(ProgressBar);
