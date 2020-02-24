import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fileSystem from "fs";
import path from "path";

const testAnswers = {
    1: 1,
    2: 2,
    3: 3,
    4: 2
}

const port = 9999;

const app = express();
app.listen(port, console.log(`servers listening on port: ${port}`));

app.use(cors(), bodyParser.urlencoded({extended:true}), bodyParser.json());
app.get("/questions", (req, res) => {
  const filePath = path.join(__dirname, "testQuestions.json");
  const readStream = fileSystem.createReadStream(filePath);
  readStream.pipe(res);
});


app.post("/score", async(req, res) => {
    const data = req.body.attempts;
    const score = await calcScore(data.payload);
    res.status(200).send((score).toString());

});



const calcScore = async (attempts) => {
    let correctAnswers = 0;
    let total = 0;
    for (let questionId in testAnswers) {
      if (
        attempts[questionId] &&
        attempts[questionId] === testAnswers[questionId]
      ) {
        correctAnswers++;
      }
      total++;
    }
    
    return Math.round((correctAnswers / total) * 100);

}