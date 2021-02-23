import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppProvidersProps } from './AppProviders.types';
import { ProductsStore } from 'store/products-search/ProductsSearchStore';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <ProductsStore>
      <Router>{children}</Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </ProductsStore>
  </QueryClientProvider>
);
