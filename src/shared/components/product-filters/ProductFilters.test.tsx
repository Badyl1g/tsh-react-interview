// import React from 'react';

// import { render } from 'tests';
import useProductSearch from 'store/products-search/useProductsSearch';
import { initialState } from 'store/products-search/ProductsSearchContext';

// import ProductFilters from './ProductFilters';

jest.mock('store/products-search/useProductsSearch');

const useProducSearchMock = useProductSearch as jest.Mock;

const productSearch = {
  filters: initialState,
  setFilters: () => {},
};

useProducSearchMock.mockReturnValue(productSearch);
beforeAll(() => {});

afterAll(() => {
  useProducSearchMock.mockRestore();
});

test('should', async () => {
  // const { getByLabelText } = render(<ProductFilters />);
  // TODO Fix this test
  // getByLabelText(/search/i);
});
