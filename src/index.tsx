import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

export { default as Button } from "./components/publish/Button";
export { default as Input } from "./components/publish/formElements/Input";
export { default as RadioToggle } from "./components/publish/formElements/RadioToggle";
