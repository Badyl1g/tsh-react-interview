import React from 'react';

import { useProductsPagination } from 'store/products-search/useProductsPagination';

export const ProductsPagination = () => {
  // TODO Fix this 10
  const { page, totalPages, prevPage, nextPage } = useProductsPagination();

  return (
    <div>
      <button onClick={prevPage} disabled={page <= 1}>
        prev
      </button>

      {page}

      <button
        onClick={nextPage}
        disabled={totalPages !== undefined && page >= totalPages}
      >
        next
      </button>
    </div>
  );
};
