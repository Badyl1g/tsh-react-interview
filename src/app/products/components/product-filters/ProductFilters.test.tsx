import React from 'react';
import user from '@testing-library/user-event';

import { render, waitFor } from 'tests';
import { getProducts } from 'api/client';
import { IProductsResponse } from 'api/client.types';
import { mockProductsResponse } from 'mocks/products';
import { IProductSearchState } from 'store/products-search/ProductsSearchStore.types';
import { initialState } from 'store/products-search/ProductsSearchContext';

import ProductFilters from './ProductFilters';

jest.mock('api/client');

const getProductsMock = getProducts as jest.Mock<Promise<IProductsResponse>>;

const mockUserFilters: IProductSearchState = {
  ...initialState,
};

beforeAll(() => {
  getProductsMock.mockResolvedValue(Promise.resolve(mockProductsResponse));
});

afterAll(() => {
  getProductsMock.mockRestore();
});

test('should', async () => {
  const { getByPlaceholderText, getByLabelText } = render(<ProductFilters />);

  const searchInput = getByPlaceholderText(/search/i);

  expect(getProductsMock).toHaveBeenCalledWith(mockUserFilters);

  user.type(searchInput, 'ergonomic');

  await waitFor(() =>
    expect(getProductsMock).toHaveBeenCalledWith({
      ...mockUserFilters,
      search: 'ergonomic',
    })
  );

  user.click(getByLabelText(/promo/i));

  await waitFor(() =>
    expect(getProductsMock).toHaveBeenCalledWith({
      ...mockUserFilters,
      search: 'ergonomic',
      promo: true,
    })
  );

  expect(getProductsMock).toHaveBeenCalledTimes(3);
});
