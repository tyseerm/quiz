import {
  STORE_QUESTIONS,
  LOAD_QUESTIONS,
  ATTEMPT_QUESTION,
  LOAD_QUESTIONS_FAILED,
  SUBMIT_QUIZ,
  SUBMIT_QUIZ_FAILED,
  STORE_SCORE
} from "./QuestionActionTypes";

//Load & store questions
export const loadQuestions = payload => ({ type: LOAD_QUESTIONS, payload });
export const loadQuestionsFailed = () => ({ type: LOAD_QUESTIONS_FAILED });
export const storeQuestions = payload => ({ type: STORE_QUESTIONS, payload });
export const attemptQuestion = payload => ({ type: ATTEMPT_QUESTION, payload });

//Submit & get score
export const submitQuiz = (payload) => ({ type: SUBMIT_QUIZ, payload});
export const submitQuizFailed = () => ({ type: SUBMIT_QUIZ_FAILED });
export const storeScore = (payload) => ({type: STORE_SCORE, payload})
