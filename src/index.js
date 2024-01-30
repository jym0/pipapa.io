import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <Router basename="/pipapa.io">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
