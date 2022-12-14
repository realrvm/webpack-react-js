// react
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
// styles
import "./fonts/fonts.scss";
import "./style.scss";

function init() {
  function createComponent(text) {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.textContent = text;
    body.append(h1);
  }

  createComponent("Webpack!!!");

  ReactDOM.render(<App />, document.getElementById("root"));
}

document.addEventListener("DOMContentLoaded", init);
