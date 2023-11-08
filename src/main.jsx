import React from "react";
import ReactDOM from "react-dom/client";
import { CVInformation } from "./components/cv-information/cv-information";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CVInformation></CVInformation>
  </React.StrictMode>,
);
