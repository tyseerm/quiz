import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import { loadQuestionsSaga, getScoreSaga } from "./questions/QuestionSagas";
import { loginSaga } from "./loginForm/LoginSagas";
import {
  loadQuizzesSaga,
  deleteQuizSaga,
  updateQuizSaga,
  addQuizSaga,
  sendInvitationSaga
} from "./dashboard/DashboardSagas";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    loadQuestionsSaga(),
    getScoreSaga(),
    loginSaga(),
    loadQuizzesSaga(),
    deleteQuizSaga(),
    updateQuizSaga(),
    addQuizSaga(),
    sendInvitationSaga()
  ]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
