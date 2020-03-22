import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./db/connect-db";
import md5 from "md5";
import { generateJWT, getUserObject } from "./jwt";
import { auth } from "./middleware/auth";
import {v4 as uuidv4} from 'uuid'
require("dotenv").config();

const port = 9999;

const app = express();
app.listen(port, console.log(`servers listening on port: ${port}`));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.post("/users/signin", async (req, res) => {
  const db = await connectDB();
  const username = req.body.username;
  const password = req.body.password;

  const user = await db.collection("users").findOne({ username: username });
  if (!user) {
    return res.status(401).json({
      error: true,
      message: "Invalid username or password"
    });
  }

  const passwordHash = md5(`${password}${user.passwordSalt}`);
  if (passwordHash !== user.passwordHash) {
    return res.status(401).json({
      error: true,
      message: "Invalid email or password"
    });
  }

  const token = generateJWT(user);
  const userObj = getUserObject(user);
  return res.json({ user: userObj, token });
});

app.get("/dashboard/:userId/quizzes", auth, async (req, res) => {
  const userId = req.params.userId;
  const db = await connectDB();
  const quizzes = await db
    .collection("quizzes")
    .find({ user: userId }).project({_id: 0})
    .toArray();
  res.status(200).send(quizzes);
});

app.post("/dashboard/:userId/quizzes", auth, async (req, res) => {
  const quiz = req.body.quiz;
  const db = await connectDB();
  const result = await db
    .collection("quizzes").insertOne({...quiz});
  res.status(200).send(result);
});


app.get("/dashboard/:userId/quizzes/:quizId", auth, async (req, res) => {
  console.log("YEs you are in the quiz url", req.originalUrl);
});

app.delete("/dashboard/:userId/quizzes/:quizId", auth, async (req, res) => {
  const userId = req.params.userId;
  const quizId = req.params.quizId;
  const db = await connectDB();
  await db.collection("quizzes").deleteOne({ user: userId, id: quizId });
  res.status(200).send("Quiz deleted successfully ;)");
});

app.post("/dashboard/:quizId/invitations", auth, async (req, res) => {

  const quizId = req.body.quizId;
  const email = req.body.email;
  const db = await connectDB();
  const result = await db
    .collection("invitations")
    .insertOne({ id: uuidv4(), email, quiz: quizId,});
  res.status(200).send(result);
});

app.put("/dashboard/:userId/quizzes/:quizId", auth, async (req, res) => {

  const quiz = req.body.quiz;
  const db = await connectDB();
  const result = await db
    .collection("quizzes")
    .updateOne({ id: quiz.id }, { $set: { ...quiz } });
  res.status(200).send(result);
});

app.get("/questions", async (req, res) => {
  const db = await connectDB();
  const quiz = await db.collection("quizzes").findOne({ id: "q1" });

  res.status(200).send(quiz.questions);
});


app.get("/quiz/:invitationId", async (req, res) => {
  const invitationId = req.params.invitationId;
  
  
  
  const db = await connectDB();
  const invitation = await db.collection("invitations").findOne({ id: invitationId });
  if(!invitation){
    res.status(404).send('Invitation is not valid')
  }else{
     const {id, questions } = await db.collection("quizzes").findOne({ id: invitation.quiz})
  
  res.status(200).send({questions, id});
  }
  
 
});

app.post("/score", async (req, res) => {
  
  const {attempts, quizId} = req.body;
  
  const score = await calcScore(attempts, quizId);
  res.status(200).send(score.toString());
});

const calcScore = async (attempts, quizId) => {
  const db = await connectDB();
  const quiz = await db.collection("quizzes").findOne({ id: quizId});
  const questions = quiz.questions;
  const total = questions.length;
  const correctAnswers = questions.reduce(
    (score, question) =>
      attempts[question.id] && attempts[question.id] === question.answer
        ? score + 1
        : score,
    0
  );

  return Math.round((correctAnswers / total) * 100);
};
