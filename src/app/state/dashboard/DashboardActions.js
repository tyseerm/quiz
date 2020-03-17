import {
  LOAD_QUIZZES,
  STORE_QUIZZES,
  DELETE_QUIZ,
  DELETE_QUIZ_SUCCESS,
  OPEN_QUIZ_FORM,
  CLOSE_QUIZ_FORM,
  CHANGE_QUIZ,
  UPDATE_QUIZ,
  UPDATE_QUIZ_SUCCESS,
  CHANGE_QUESTION,
  ADD_QUESTION,
  ADD_QUIZ,
  ADD_QUIZ_SUCCESS
} from "./DashboardActionTypes";

export const loadQuizzes = payload => ({
  type: LOAD_QUIZZES,
  payload
});

export const storeQuizzes = payload => ({
  type: STORE_QUIZZES,
  payload
});

export const deleteQuiz = payload => ({
  type: DELETE_QUIZ,
  payload
});

export const deleteQuizSuccess = () => ({
  type: DELETE_QUIZ_SUCCESS
});

export const openQuizForm = payload => ({
  type: OPEN_QUIZ_FORM,
  payload
});

export const closeQuizForm = () => ({
  type: CLOSE_QUIZ_FORM
});


export const changeQuiz = payload => ({
    type: CHANGE_QUIZ,
    payload
  });

  export const changeQuestion = payload => ({
    type: CHANGE_QUESTION,
    payload
  });

  export const updateQuiz = payload => ({
    type: UPDATE_QUIZ,
    payload
  });

  export const updateQuizSuccess = () => ({
    type: UPDATE_QUIZ_SUCCESS
  });

  export const addQuestion = () => ({
    type: ADD_QUESTION
  });

  export const addQuiz = payload => ({
    type: ADD_QUIZ,
    payload
  })

  export const addQuizSuccess = () => ({
    type: ADD_QUIZ_SUCCESS
  });