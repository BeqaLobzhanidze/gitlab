import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DetailsContext } from "./context/DetailsContext";

ReactDOM.render(
  <React.StrictMode>
    <DetailsContext>
      <App />
    </DetailsContext>
  </React.StrictMode>,
  document.getElementById("root")
);
