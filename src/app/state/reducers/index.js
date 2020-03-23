import {combineReducers} from 'redux';
import {attempts, quiz, results } from '../../modules/quiz_taker/state/questions/QuestionsReducers';
import { registerForm } from '../../modules/quiz_taker/state/registerForm/RegisterFormReducers';
import {loginForm, session} from '../../modules/quiz_maker/state/loginForm/LoginFormReducers';
import {dashboard} from '../../modules/quiz_maker/state/dashboard/DashboardReducers'

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