import React from 'react';

import { render } from 'tests';
import { mockProductsList } from 'mocks/products';

import ProductsList from './ProductsList';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getAllByRole } = render(
      <ProductsList products={mockProductsList} />
    );

    expect(getAllByRole('listitem')).toHaveLength(3);
  });
});
