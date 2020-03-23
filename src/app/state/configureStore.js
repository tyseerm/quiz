import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import {
  loadQuestionsSaga,
  getScoreSaga
} from "../modules/quiz_taker/state/questions/QuestionSagas";
import { loginSaga } from "../modules/quiz_maker/state/loginForm/LoginSagas";
import {
  loadQuizzesSaga,
  deleteQuizSaga,
  updateQuizSaga,
  addQuizSaga,
  sendInvitationSaga
} from "../modules/quiz_maker/state/dashboard/DashboardSagas";

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
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
