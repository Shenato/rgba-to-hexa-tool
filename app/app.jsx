import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { history } from "./services/history";
import "./services/url-change-listener";

import GlobalStyle from "./styles/globalStyle";
import theme from "Styles/vars";
import "./styles/main";

import AppLayout from "Components/layout/layout";
import ColorConverter from "Containers/color-converter";
import SiteHeader from "Components/layout/site-header";
import { getCorrectTextColor } from "Utils/colors";

export default function app() {
  const [mainBackground, setMainBackground] = useState(theme.mainCanvas);
  return (
    <Provider store={store}>
      <ThemeProvider
        theme={{
          ...theme,
          mainBackground,
          textMain: mainBackground && getCorrectTextColor(mainBackground),
        }}
      >
        <Router history={history}>
          <GlobalStyle />
          <AppLayout>
            <SiteHeader />
            <ColorConverter setMainBackground={setMainBackground} />
          </AppLayout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
