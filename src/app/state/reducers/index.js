import {combineReducers} from 'redux';
import {attempts, quiz, results } from '../questions/QuestionsReducers';
import { registerForm } from '../registerForm/RegisterFormReducers';
import {loginForm, session} from '../loginForm/LoginFormReducers';
import {dashboard} from '../dashboard/DashboardReducers'

const rootReducer = combineReducers({
    attempts,
    quiz,
    registerForm,
    results,
    loginForm,
    dashboard,
    session,
});

export default rootReducer;