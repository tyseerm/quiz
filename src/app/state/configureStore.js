import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import { watchQuestionsSaga, getScoreSaga } from "./questions/QuestionSagas";
import { loginSaga } from "./loginForm/LoginSagas";
import {
  loadQuizzesSaga,
  deleteQuizSaga,
  updateQuizSaga,
  addQuizSaga
} from "./dashboard/DashboardSagas";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    watchQuestionsSaga(),
    getScoreSaga(),
    loginSaga(),
    loadQuizzesSaga(),
    deleteQuizSaga(),
    updateQuizSaga(),
    addQuizSaga()
  ]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
