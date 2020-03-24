
const BASE_URL =  process.env.NODE_ENV === 'production' ? '/api' : "http://localhost:9999/api";
export const QUIZZES = (userId) => `${BASE_URL}/${userId}/quizzes`
export const QUIZ = (userId, quizId) => `${BASE_URL}/${userId}/quizzes/${quizId}`
export const ADD_QUIZ_INVITATION = (quizId) => `${BASE_URL}/${quizId}/invitations`
export const QUIZ_BY_INVITATION = invitationId => `${BASE_URL}/quiz/${invitationId}`
export const GET_SCORE  = `${BASE_URL}/score`
export const LOGIN = `${BASE_URL}/users/signin`
