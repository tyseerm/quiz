import { connect } from "react-redux";
import ScoreNotification from "./ScoreNotification";

const mapStateToProps = ({ results }) => {
  const { submited, score } = results;
  let show = false;
  let type,
    message,
    details = "";
  if (submited) {
    show = true;
    if (score === 100) {
      type = "success";
      message = "Awesome!";
      details = "You achived full score";
    } else if (score >= 50) {
      type = "info";
      message = "Congratulations!";
      details = `You passed with ${score}%`;
    } else {
      type = "danger";
      message = "Sorry!";
      details = `You didn't pass, your score is ${score}%`;
    }
  }
  return {
    show,
    type,
    message,
    details
  };
};

export default connect(mapStateToProps)(ScoreNotification);
