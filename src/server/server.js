import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./db/connect-db";

const port = 9999;

const app = express();
app.listen(port, console.log(`servers listening on port: ${port}`));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.get("/questions", async (req, res) => {
  const db = await connectDB();
  const questions = await db
    .collection("questions")
    .find()
    .project({ answer: 0, _id: 0 })
    .toArray();
  res.status(200).send(questions);
});

app.post("/score", async (req, res) => {
  const data = req.body.attempts;
  const score = await calcScore(data.payload);
  res.status(200).send(score.toString());
});

const calcScore = async attempts => {
  const db = await connectDB();
  const questions = await db
    .collection("questions")
    .find()
    .project({ id: 1, answer: 1, _id: 0 })
    .toArray();
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
