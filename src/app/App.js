import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as routes from './routes';

import QuizContainer from "./components/Questions/QuizContainer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ScoreNotification from "./components/ScoreNotification";

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Switch>
          <Route exact path={routes.REGISTER_PAGE} component={RegisterForm} />
          <Route exact path={routes.QUIZ_PAGE} component={QuizContainer} />
          <Route exact path={routes.REESULTS_PAGE} component={ScoreNotification} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
