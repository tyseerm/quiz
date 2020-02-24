import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import QuizContainer from "./components/Questions/QuizContainer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ScoreNotification from "./components/ScoreNotification";

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={RegisterForm} />
          <Route exact path="/quiz" component={QuizContainer} />
          <Route exact path="/results" component={ScoreNotification} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
