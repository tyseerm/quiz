import {put, take } from "redux-saga/effects";
import * as routes from "../../../../api/routes";
import {makeRequest} from "../../../../api";
import {
  storeQuestions,
  loadQuestionsFailed,
  storeScore,
  submitQuizFailed
} from "./QuestionActions";
import { LOAD_QUESTIONS, SUBMIT_QUIZ } from "./QuestionActionTypes";

const optionsForGetQuiz = invitationId => ({
  method: "GET",
  url: routes.QUIZ_BY_INVITATION(invitationId)
});

const optionsForGetScore = (attempts, quizId) => ({
  method: "POST",
  url: routes.GET_SCORE,
  headers: {},
  data: {
    attempts,
    quizId
  }
});

export function* loadQuestionsSaga() {
  while (true) {
    try {
      const {payload} = yield take(LOAD_QUESTIONS, loadQuestionsSaga);

      const getQuizConfig = optionsForGetQuiz(payload.invitationId);
      const data = yield makeRequest(getQuizConfig);

      yield put(storeQuestions(data));
    } catch (error) {
      console.error(error);
      yield put(loadQuestionsFailed(error));
    }
  }
}

export function* getScoreSaga() {
  while (true) {
    try {
      const {payload} = yield take(SUBMIT_QUIZ);
      
      const {attempts, quizId} = payload
      const getScoreConfig = optionsForGetScore(attempts, quizId)
      
      const score = yield makeRequest(getScoreConfig)
      
      yield put(storeScore(score));
    } catch (error) {
      console.log('getScoreSaga.error: ', error);
      
      yield put(submitQuizFailed(error));
    }
  }
}
