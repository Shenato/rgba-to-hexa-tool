import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import theme from 'Styles/vars';
import './styles/main';

import AppLayout from 'Components/layout/layout';
import ColorConverter from 'Containers/color-converter';
import SiteHeader from 'Components/layout/site-header';
import Footer from 'Components/layout/footer';

import { getBestContrastColor } from 'Utils/colors';
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export default function app() {
  const [mainBackground, setMainBackground] = useState(theme.mainCanvas);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        mainBackground,
        textMain:
          mainBackground &&
          getBestContrastColor({
            backgroundHex: mainBackground,
            textColors: [theme.textLight, theme.textDark],
          }),
      }}
    >
      <GlobalStyle />
      <AppLayout>
        <InnerWrapper>
          <SiteHeader />
          <ColorConverter setMainBackground={setMainBackground} />
        </InnerWrapper>
        <Footer />
      </AppLayout>
    </ThemeProvider>
  );
}
