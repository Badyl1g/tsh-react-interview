import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import { AppProvidersProps } from './AppProviders.types';
import ProductsStore from 'store/products-search/ProductsSearchStore';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4460F7',
      main: '#2140E8',
    },
    secondary: {
      main: '#F9A52B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F2F2F2',
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        boxShadow: 'none !important',
      },
    },
  },
});

const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ProductsStore>
        <CssBaseline />

        <Router>{children}</Router>

        <ReactQueryDevtools initialIsOpen={false} />
      </ProductsStore>
    </ThemeProvider>
  </QueryClientProvider>
);

export default AppProviders;
