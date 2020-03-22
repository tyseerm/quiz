import {
  REGISTER_FORM_COMPLETED,
  REGISTER_FORM_UPDATED
} from "./RegisterFormActionTypes";

export const registerForm = (
  state = {name: '', email: ''},
  { type, payload }
) => {
  switch (type) {
    case REGISTER_FORM_UPDATED:
      return { ...state, ...payload };
    case REGISTER_FORM_COMPLETED:
      return { ...state, registered: true };
    default:
      return state;
  }
};
