import React from 'react';
import { useProductSearch } from 'store/products-search/useProductsSearch';

export const ProductFilters = () => {
  const { filters, setFilters } = useProductSearch();

  return (
    <>
      <input
        type="text"
        defaultValue={filters.search ?? ''}
        onChange={(e) => setFilters({ search: e.currentTarget.value })}
      />

      <label htmlFor="active">Active</label>

      <input
        type="checkbox"
        name="active"
        id="active"
        defaultChecked={filters.active ?? false}
        onChange={(e) =>
          setFilters({ active: e.currentTarget.checked || null })
        }
      />

      <label htmlFor="promo">Promo</label>

      <input
        type="checkbox"
        name="promo"
        id="promo"
        defaultChecked={filters.promo ?? false}
        onChange={(e) => setFilters({ promo: e.currentTarget.checked || null })}
      />
    </>
  );
};
