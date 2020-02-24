import {combineReducers} from 'redux';
import {attempts, questions, results } from '../questions/QuestionsReducers';
import { registerForm } from '../registerForm/RegisterFormReducers';
const rootReducer = combineReducers({
    attempts,
    questions,
    registerForm,
    results
});

export default rootReducer;