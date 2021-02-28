// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React, { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Queries } from '@testing-library/dom';

import ProductsStore from 'store/products-search/ProductsSearchStore';

const queryClient = new QueryClient();

const Wrapper = ({ children }: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ProductsStore>
      <Router>{children}</Router>
    </ProductsStore>
  </QueryClientProvider>
);

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options: RenderOptions<Q>
): RenderResult<Q>;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>
): RenderResult<Q> | RenderResult {
  return render<Q>(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
