
const BASE_URL = "http://localhost:9999";
export const DASHBOARD = `${BASE_URL}/dashboard`
export const QUIZZES = (userId) => `${DASHBOARD}/${userId}/quizzes`
export const QUIZ = (userId, quizId) => `${DASHBOARD}/${userId}/quizzes/${quizId}`
