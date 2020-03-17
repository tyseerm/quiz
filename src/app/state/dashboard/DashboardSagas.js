import { put, take } from "redux-saga/effects";
import axios from "axios";

import {
  LOAD_QUIZZES,
  DELETE_QUIZ,
  UPDATE_QUIZ,
  ADD_QUIZ
} from "./DashboardActionTypes";
import {
  storeQuizzes,
  deleteQuizSuccess,
  updateQuizSuccess,
  closeQuizForm,
  addQuizSuccess
} from "./DashboardActions";
import * as routes from "../../api/routes";

const makeRequest = async requestOptions => {
  try {
    const response = await axios(requestOptions);
    return response.data;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const optionsForLoadQuizzes = (token, userId) => ({
  method: "GET",
  url: routes.QUIZZES(userId),
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const optionsForDeleteQuiz = (token, userId, quizId) => ({
  method: "DELETE",
  url: routes.QUIZ(userId, quizId),
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const optionsForUpdateQuiz = (token, quiz) => ({
  method: "PUT",
  url: routes.QUIZ(quiz.user, quiz.id),
  headers: {
    Authorization: `Bearer ${token}`
  },
  data: {
    quiz
  }
});

const optionsForAddQuiz = (token, quiz) => ({
  method: "POST",
  url: routes.QUIZZES(quiz.user),
  headers: {
    Authorization: `Bearer ${token}`
  },
  data: {
    quiz
  }
});

export function* loadQuizzesSaga() {
  while (true) {
    try {
      const action = yield take(LOAD_QUIZZES);

      const { token, userId } = action.payload;

      const loadQuizzesOptions = optionsForLoadQuizzes(token, userId);
      const quizzes = yield makeRequest(loadQuizzesOptions);

      yield put(storeQuizzes({ quizzes }));
    } catch (error) {
      console.log("loadQuizzesSaga error", error);
    }
  }
}

export function* deleteQuizSaga() {
  while (true) {
    try {
      const action = yield take(DELETE_QUIZ);
      const { token, userId, quizId } = action.payload;
      const deleteQuizOptions = optionsForDeleteQuiz(token, userId, quizId);
      yield makeRequest(deleteQuizOptions);
      yield put(deleteQuizSuccess());
    } catch (error) {
      console.log("couldn't delete the quiz because of: ", error);
    }
  }
}

export function* updateQuizSaga() {
  while (true) {
    try {
      const action = yield take(UPDATE_QUIZ);

      const { token, quiz } = action.payload;
      const updateQuizOptions = optionsForUpdateQuiz(token, quiz);

      const { result } = yield makeRequest(updateQuizOptions);
      if (result.nModified === 1) {
        yield put(updateQuizSuccess());
        yield put(closeQuizForm());
      } else {
        console.log("couldn't update your quiz :(");
      }
    } catch (error) {
      console.log("couldn't update the quiz because of: ", error);
    }
  }
}

export function* addQuizSaga() {
  while (true) {
    try {
      const action = yield take(ADD_QUIZ);

      const { token, quiz } = action.payload;

      const addQuizOptions = optionsForAddQuiz(token, quiz);

      const { result } = yield makeRequest(addQuizOptions);
      console.log('add quiz saga, result: ', result);
      
      yield put(addQuizSuccess());
      yield put(closeQuizForm());
    } catch (error) {
      console.log("couldn't update the quiz because of: ", error);
    }
  }
}
