import React from 'react';

import { render } from 'tests';

import Products from './Products';
import { getProducts } from 'api/client';

jest.mock('api/client');

const getProductsMock = getProducts as jest.Mock;

getProductsMock.mockImplementation(() => {});

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByTitle } = render(<Products />);

    getByTitle(/loading/i);
  });
});
