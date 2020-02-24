import React from "react";
import {connect} from 'react-redux'

import { getPercentageInt } from "../utils/MathUtils";


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
  return { percentage: getPercentageInt(attemptsCount, questionsCount) };
};

export default connect(mapStateToProps)(ProgressBar);