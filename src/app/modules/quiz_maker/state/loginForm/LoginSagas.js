import { call, put, take } from "redux-saga/effects";
import axios from "axios";

import { loginSuccess, loginFailed, storeSession } from "./LoginFormActions";
import { LOGIN_FORM_COMPLETED } from "./LoginFormActionTypes";
import { LOGIN } from "../../../../api/routes";

export function* loginSaga(){
    while (true) {
        try {
          const {payload} = yield take(LOGIN_FORM_COMPLETED);
          
          const response = yield call(axios.post, LOGIN, {
            username: payload.username,
            password: payload.password
          });
          yield put(loginSuccess());
          yield put(storeSession(response.data))
        } catch (error) {
            console.log('login error', error);
            
          yield put(loginFailed(error));
        }
      }
}