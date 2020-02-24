import { call, put, takeLatest, take } from "redux-saga/effects";
import axios from "axios";

import {
  storeQuestions,
  loadQuestionsFailed,
  storeScore,
  submitQuizFailed
} from "./QuestionActions";
import { LOAD_QUESTIONS, SUBMIT_QUIZ } from "./QuestionActionTypes";

const BASE_URL = "http://localhost:9999";

function* loadQuestionsSaga() {
  try {
    const { data } = yield call(axios.get, `${BASE_URL}/questions`);
    //console.log('questionsSaga: ', data);

    yield put(storeQuestions(data));
  } catch (error) {
    console.error(error);
    yield put(loadQuestionsFailed(error));
  }
}

export function* watchQuestionsSaga() {
  yield takeLatest(LOAD_QUESTIONS, loadQuestionsSaga);
}

export function* getScoreSaga() {
  while (true) {
    try {
      const attempts = yield take(SUBMIT_QUIZ);
      console.log("getScoreSaga: ", attempts);
      const { data } = yield call(axios.post, `${BASE_URL}/score`, {
        attempts: attempts
      });

      yield put(storeScore(data));
    } catch (error) {
      yield put(submitQuizFailed(error));
    }
  }
}
