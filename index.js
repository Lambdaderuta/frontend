import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./src/app";
import store from "./src/store/app";
import "./public/main.css";
import "./public/normalize.css";

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
