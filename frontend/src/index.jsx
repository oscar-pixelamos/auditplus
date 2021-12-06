import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/theme.scss";
import "./css/base.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
