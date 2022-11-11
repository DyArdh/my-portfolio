import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const scroll = document.querySelector("html");
scroll.classList.add("scroll-smooth");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
