import React from "react";
import { Modal, Button, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { closeQuizForm, changeQuiz, updateQuiz, changeQuestion, addQuestion, addQuiz } from "../../../state/dashboard/DashboardActions";
import QuizForm from "./QuizForm";

const QuizFormModal = ({ token, show, quiz, handleClose, handleQuizChange, handleUpdateQuiz, handleQuestionChange, handleAddQuestion }) => {
  return (
    <Modal size='xl' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{quiz.title || "New Quiz"}</Modal.Title>
      </Modal.Header>
      <QuizForm {...quiz} handleChange={handleQuizChange} handleQuestionChange={handleQuestionChange} handleAddQuestion={handleAddQuestion} />
      <Modal.Footer>
        <ButtonGroup size="lg" className="mb-2">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=> handleUpdateQuiz(token, quiz)}>Save</Button>
          <Button className='btn-danger'>Delete</Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = ({ dashboard, session }) => ({
  token: session.token,
  show: dashboard.showModal,
  quiz: dashboard.selectedQuiz || {}
});

const mapDispatchToProps = dispatch => ({
  handleClose() {
    dispatch(closeQuizForm());
  },
  handleQuizChange({target}) {
   
    
    const {name, value, type, checked} = target

    const payload = (type !== 'checkbox') ? { [name]: value } : {[name]: checked}
    dispatch(changeQuiz(payload));
  },
  handleQuestionChange(event, payload) {
    console.log('handleQuestionChange', event.target);
    
    const {value} = event.target
    dispatch(changeQuestion({value, questionPayload: payload}));
  },
  handleUpdateQuiz(token, quiz) {
    if(quiz.new){
      delete quiz.new
      dispatch(addQuiz({token, quiz}));
    }else{
      dispatch(updateQuiz({token, quiz}));
    }
    
  },
  handleAddQuestion() {

    dispatch(addQuestion());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizFormModal);
