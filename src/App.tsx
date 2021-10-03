import React from "react";
import { AppRouter } from "./router/AppRouter";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./App.scss";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppRouter />
    </I18nextProvider>
  );
}

export default App;
