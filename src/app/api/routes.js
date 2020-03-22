
const BASE_URL = "http://localhost:9999";
export const DASHBOARD = `${BASE_URL}/dashboard`
export const QUIZZES = (userId) => `${DASHBOARD}/${userId}/quizzes`
export const QUIZ = (userId, quizId) => `${DASHBOARD}/${userId}/quizzes/${quizId}`
export const ADD_QUIZ_INVITATION = (quizId) => `${DASHBOARD}/${quizId}/invitations`
export const QUIZ_BY_INVITATION = invitationId => `${BASE_URL}/quiz/${invitationId}`
export const GET_SCORE  = `${BASE_URL}/score`
