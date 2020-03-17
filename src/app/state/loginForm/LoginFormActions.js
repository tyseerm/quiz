import {
  LOGIN_FORM_UPDATED,
  LOGIN_FORM_COMPLETED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  STORE_SESSION
} from "./LoginFormActionTypes";

export const loginFormUpdated = payload => ({
  type: LOGIN_FORM_UPDATED,
  payload
});

export const loginFormCompleted = (payload) => ({
  type: LOGIN_FORM_COMPLETED,
  payload
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS
});

export const storeSession = payload => ({
  type: STORE_SESSION,
  payload
});

export const loginFailed =  () =>({
  type: LOGIN_FAILED
})