import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <CssBaseline />
            <Component {...pageProps} />
          </ApolloProvider>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
};

export default CustomApp;
