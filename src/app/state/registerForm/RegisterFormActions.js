import {
  REGISTER_FORM_UPDATED,
  REGISTER_FORM_COMPLETED
} from "./RegisterFormActionTypes";

export const registerFormUpdated = payload => ({
  type: REGISTER_FORM_UPDATED,
  payload
});

export const registerFormCompleted = () => ({
  type: REGISTER_FORM_COMPLETED
});
