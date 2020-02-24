import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import {watchQuestionsSaga, getScoreSaga} from './questions/QuestionSagas';


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([watchQuestionsSaga(), getScoreSaga()]);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
