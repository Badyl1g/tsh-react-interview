import React from 'react';
import { useQuery } from 'react-query';

import { getProducts } from 'api/client';
import { IProductsResponse } from 'api/client.types';
import {
  ProductsSearchStateContext,
  ProductsDispatchContext,
} from 'store/products-search/ProductsSearchContext';
import { IProductSearchState } from 'store/products-search/ProductsSearchStore.types';

export const useProductSearch = () => {
  const filters = React.useContext(ProductsSearchStateContext);
  const dispatch = React.useContext(ProductsDispatchContext);

  const queryData = useQuery<IProductsResponse>(
    ['products', filters],
    () => getProducts(filters),
    { keepPreviousData: true }
  );

  const setFilters = (filters: Partial<IProductSearchState>) =>
    dispatch({ type: 'UPDATE_FILTERS', filters });

  const clearFilters = () => dispatch({ type: 'CLEAR_FILTERS' });

  return { filters, queryData, setFilters, clearFilters };
};
