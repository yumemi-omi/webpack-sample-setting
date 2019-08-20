import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles.scss";

import App from "./App";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
