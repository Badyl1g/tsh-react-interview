import React from 'react';

import { Pagination } from '@material-ui/lab';

import { ProductsPaginationProps } from './ProductsPagination.types';

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  page,
  totalPages,
  changePage,
  onChange,
}) => (
  <Pagination
    count={totalPages}
    page={page}
    onChange={(_, page) => {
      onChange?.();
      changePage(page);
    }}
  />
);

export default ProductsPagination;
