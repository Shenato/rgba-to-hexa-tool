import React, { useState } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { history } from "./services/history";
import "./services/url-change-listener";

import "./styles/main";

export default function app() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <p>Content</p>
      </Router>
    </Provider>
  );
}
