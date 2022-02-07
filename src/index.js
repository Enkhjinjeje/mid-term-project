import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { MainDataProvider } from "./components/context/test-context";

ReactDOM.render(
  <React.StrictMode>
    <MainDataProvider>
      <App />
    </MainDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
