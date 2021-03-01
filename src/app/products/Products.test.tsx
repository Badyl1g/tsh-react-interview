import React from 'react';

import { render } from 'tests';

import Products from './Products';
import { getProducts } from 'api/client';

jest.mock('api/client');

const getProductsMock = getProducts as jest.Mock;

getProductsMock.mockImplementation(() => {});

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<Products />);

    // getByText('Products page')
    getByText(/loading/i);
  });
});
