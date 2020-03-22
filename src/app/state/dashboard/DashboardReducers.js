import { v4 as uuidv4 } from "uuid";
import {
  DELETE_QUIZ_SUCCESS,
  STORE_QUIZZES,
  OPEN_QUIZ_FORM,
  CLOSE_QUIZ_FORM,
  CHANGE_QUIZ,
  UPDATE_QUIZ_SUCCESS,
  CHANGE_QUESTION,
  ADD_QUESTION,
  ADD_QUIZ_SUCCESS,
  HIDE_INVITE_MODAL,
  SEND_INVITATION
} from "./DashboardActionTypes";

export const dashboard = (
  state = { quizzes: [], loaded: false },
  { type, payload }
) => {
  switch (type) {
    case STORE_QUIZZES:
      return { ...state, ...payload, loaded: true };
    case DELETE_QUIZ_SUCCESS:
      return { ...state, loaded: false };
    case OPEN_QUIZ_FORM:
      return { ...state, ...payload, showModal: true };
    case ADD_QUIZ_SUCCESS:
      return { ...state, loaded: false };
    case CLOSE_QUIZ_FORM:
      return { ...state, showModal: false };
      case SEND_INVITATION:
        return { ...state, ...payload, sendInvite: true };
    case HIDE_INVITE_MODAL:
      return { ...state, showInviteModal: false };
    case CHANGE_QUIZ:
      return { ...state, selectedQuiz: { ...state.selectedQuiz, ...payload } };
    case ADD_QUESTION:
      const newQuestion = {
        id: uuidv4(),
        title: "New Question",
        choices: [1, 2, 3].map(n => ({ value: `Choice ${n}`, id: uuidv4() }))
      };

      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          questions: [...state.selectedQuiz.questions, newQuestion]
        }
      };
    case CHANGE_QUESTION:
      console.log("CHANGE_QUESTION: ", payload);

      const selectedQuiz = state.selectedQuiz;
      const selectedQuizQuestions = selectedQuiz.questions;
      const { questionPayload, value } = payload;
      const {
        questionId,
        choiceId,
        addChoice,
        deleteChoice,
        answer
      } = questionPayload;
      const updatedQuestions = selectedQuizQuestions.map(question => {
        if (question.id === questionId) {
          if (answer) {
            return { ...question, answer };
          }
          if (addChoice) {
            const newChoice = { value: "New Choice", id: uuidv4() };
            console.log("newChoice: ", newChoice);

            return { ...question, choices: [...question.choices, newChoice] };
          }
          if (deleteChoice) {
            const questionChoices = question.choices;
            const updatedChoices = questionChoices.filter(
              choice => choice.id !== choiceId
            );
            return { ...question, choices: updatedChoices };
          }
          if (choiceId) {
            const questionChoices = question.choices;
            const updatedChoices = questionChoices.map(choice =>
              choice.id === choiceId ? { ...choice, value } : choice
            );
            return { ...question, choices: updatedChoices };
          }

          return { ...question, title: value };
        } else {
          return question;
        }
      });

      return {
        ...state,
        selectedQuiz: { ...state.selectedQuiz, questions: updatedQuestions }
      };
    case UPDATE_QUIZ_SUCCESS:
      return { ...state, loaded: false };
    default:
      return state;
  }
};
