import React from "react";
import Header from "./commons/components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as pages from './pages';

import QuizContainer from "./modules/quiz_taker/components/Questions/QuizContainer";
import RegisterForm from "./modules/quiz_taker/components/RegisterForm/RegisterForm";
import ScoreNotification from "./modules/quiz_taker/components/ScoreNotification";
import LoginForm from "./modules/quiz_maker/components/LoginForm/LoginForm";
import Dashboard from "./modules/quiz_maker/components/Dashboard/Dashboard";
function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Switch>
          <Route exact path={pages.REGISTER_PAGE} component={RegisterForm} />
          <Route exact path={pages.TAKE_QUIZ} component={QuizContainer} />
          <Route exact path={pages.QUIZ_PAGE} component={QuizContainer} />
          <Route exact path={pages.REESULTS_PAGE} component={ScoreNotification} />
          <Route exact path={pages.LOGIN_PAGE} component={LoginForm} />
          <Route exact path={pages.DASHBOARD_PAGE} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
