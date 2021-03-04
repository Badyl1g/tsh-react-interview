import React from 'react';

import { render } from 'tests';
import { getProducts } from 'api/client';

import Products from './Products';

jest.mock('api/client');

const getProductsMock = getProducts as jest.Mock;

getProductsMock.mockImplementation(() => {});

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByTitle } = render(<Products />);

    getByTitle(/loading/i);
  });
});
