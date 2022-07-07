import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthenticationContext";
import { BlockContextProvider } from "./context/SingleBlock";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BlockContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BlockContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
