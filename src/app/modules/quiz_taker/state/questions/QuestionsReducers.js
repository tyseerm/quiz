import {
  ATTEMPT_QUESTION,
  STORE_QUESTIONS,
  SUBMIT_QUIZ,
  STORE_SCORE,
  LOAD_QUESTIONS_FAILED
} from "./QuestionActionTypes";

export const attempts = (attempts = {}, { type, payload }) => {
  switch (type) {
    case ATTEMPT_QUESTION:
      return { ...attempts, ...payload };

    default:
      return attempts;
  }
};

export const quiz = (quiz = {questions: [], id: null}, { type, payload }) => {
  switch (type) {
    case STORE_QUESTIONS:
      return {...payload};
    case LOAD_QUESTIONS_FAILED:
      return quiz
    default:
      return quiz;
  }
};

export const results = (results = {}, { type, payload }) => {
  switch (type) {
    case SUBMIT_QUIZ:
      return { ...results, submited: true};
    case STORE_SCORE:
      
      return { ...results, score: payload };
    
    default:
      return results;
  }
};
