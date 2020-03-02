import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./app/state/configureStore";

import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./app/serviceWorker";
import { ConfigContext, configValue } from "./app/config";
ReactDOM.render(
  <ConfigContext.Provider value={configValue}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
