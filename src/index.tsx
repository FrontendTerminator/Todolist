import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { store } from "./store/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { App } from "./app/App";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
