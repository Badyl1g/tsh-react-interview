import React from 'react';

import { render, waitFor } from 'tests';

import Products from './Products';
// import { getProducts as getProductsMock } from 'api/client';
// import { mockProductsResponse } from 'mocks/products';

// jest.mock('api/client');

// getProductsMock.mockReturnValue(Promise.resolve(mockProductsResponse));

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByRole, getByText } = render(<Products />);

    // getByText('Products page')
    getByText(/loading/i);
  });
});
