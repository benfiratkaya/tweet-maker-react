import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./redux/store";
import Routes from "./utilities/routes";
import reportWebVitals from "./utilities/reportWebVitals";
import "./utilities/i18n";

import Preloader from "./components/Preloader";

ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <Provider store={store}>
      <ThemeProvider theme={{ colors: { background: "red" } }}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
