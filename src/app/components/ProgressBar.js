import React from "react";
import {connect} from 'react-redux'



const ProgressBar = ({ percentage}) => {
  percentage = isNaN(percentage) ? 0 : percentage;
  return(
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
  const questionsCount = state.questions.length;
  return { percentage: Math.round((attemptsCount / questionsCount) * 100)};
};

export default connect(mapStateToProps)(ProgressBar);
