import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./assets/styles/index.sass";
import api from "./redux/api/api.js";
import { configureStore } from "./redux/store/store";

ReactDOM.render(
  <Provider store={configureStore({ api })}>
    <App />
  </Provider>,
  document.getElementById("root")
);
