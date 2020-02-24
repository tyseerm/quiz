import {
  ATTEMPT_QUESTION,
  STORE_QUESTIONS,
  SUBMIT_QUIZ,
  STORE_SCORE
} from "./QuestionActionTypes";

export const attempts = (attempts = {}, { type, payload }) => {
  switch (type) {
    case ATTEMPT_QUESTION:
      return { ...attempts, ...payload };

    default:
      return attempts;
  }
};

export const questions = (questions = [], { type, payload }) => {
  switch (type) {
    case STORE_QUESTIONS:
      return [...payload];

    default:
      return questions;
  }
};

export const results = (results = {}, { type, payload }) => {
  switch (type) {
    case SUBMIT_QUIZ:
      return { ...results, submited: true};
    case STORE_SCORE:
      console.log('QReducer', STORE_SCORE, payload);
      
      return { ...results, score: payload };

    default:
      return results;
  }
};
