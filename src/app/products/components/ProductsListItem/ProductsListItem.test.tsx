import React from 'react';

import { render } from 'tests';
import { mockProduct } from 'mocks/products';

import ProductsListItem from './ProductsListItem';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<ProductsListItem product={mockProduct} />);

    getByText(/incredible wooden sausages/i);
  });
});
