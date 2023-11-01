import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>
);
