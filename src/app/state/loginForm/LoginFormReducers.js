import {
  LOGIN_FORM_COMPLETED,
  LOGIN_FORM_UPDATED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  STORE_SESSION
} from "./LoginFormActionTypes";

export const loginForm = (
  state = { username: "", password: "", loginSuccess: false , loginFailed: false },
  { type, payload }
) => {
  switch (type) {
    case LOGIN_FORM_UPDATED:
      return { ...state, ...payload };
    case LOGIN_FORM_COMPLETED:
      return { ...state, submitted: true, loginFailed: false };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, password: "", loginSuccess: true };
    case LOGIN_FAILED:
        return { ...state, loginFailed: true };
    default:
      return state;
  }
};

export const session = ( state = {}, {type, payload}) => {
  switch (type) {
    case STORE_SESSION:
        return {...state, ...payload}
    default:
      return state
  }
}
