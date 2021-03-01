import React from 'react';

import { render } from 'tests';
import user from '@testing-library/user-event';

import { ProductsPaginationProps } from './ProductsPagination.types';
import ProductsPagination from './ProductsPagination';

const mockPaginationProps: ProductsPaginationProps = {
  page: 1,
  prevPage: () => {},
  nextPage: () => {},
  changePage: jest.fn(),
  onChange: jest.fn(),
  totalPages: 5,
};

test('should display form', async () => {
  const { rerender, getByRole, getAllByRole } = render(
    <ProductsPagination {...mockPaginationProps} />
  );

  const prevButton = getByRole('button', { name: /previous page/i });
  const nextButton = getByRole('button', { name: /next page/i });

  expect(getAllByRole('button')).toHaveLength(7);

  expect(prevButton).toBeDisabled();

  user.click(nextButton);

  expect(mockPaginationProps.changePage).toHaveBeenCalledWith(2);
  expect(mockPaginationProps.changePage).toHaveBeenCalledTimes(1);
  expect(mockPaginationProps.onChange).toHaveBeenCalledTimes(1);

  const pageThreeButton = getByRole('button', { name: /page 3/i });
  user.click(pageThreeButton);

  expect(mockPaginationProps.changePage).toHaveBeenCalledWith(3);
  expect(mockPaginationProps.changePage).toHaveBeenCalledTimes(2);
  expect(mockPaginationProps.onChange).toHaveBeenCalledTimes(2);

  rerender(<ProductsPagination {...mockPaginationProps} page={5} />);

  expect(nextButton).toBeDisabled();
});
