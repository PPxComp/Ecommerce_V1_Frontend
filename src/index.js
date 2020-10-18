import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import logger from "redux-logger";
import setAuthrization from "./utils/setAuthorizationToken";
import * as loginAction from "./actions/login.action";

var middlewares = applyMiddleware(thunk, logger);
const store = createStore(reducers, middlewares);

if (localStorage.getItem("accessToken")) {
  setAuthrization(localStorage.getItem("accessToken"));
  if (
    localStorage.getItem("isAdmin") &&
    localStorage.getItem("isAdmin") === "true"
  ) {
    store.dispatch(loginAction.setStateAdmin(true));
  } else {
    store.dispatch(loginAction.setStateAdmin(false));
  }
  store.dispatch(loginAction.setStateToSuccess("already login"));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
