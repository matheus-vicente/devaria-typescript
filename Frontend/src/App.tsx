import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { AppProvider } from "./hooks";

import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export { App };
