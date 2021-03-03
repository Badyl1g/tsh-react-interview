import React from 'react';

import {
  ProductsSearchStateContext,
  ProductsDispatchContext,
} from 'store/products-search/ProductsSearchContext';
import { IProductSearchState } from 'store/products-search/ProductsSearchStore.types';

const useProductSearch = () => {
  const filters = React.useContext(ProductsSearchStateContext);
  const dispatch = React.useContext(ProductsDispatchContext);

  const setFilters = (filters: Partial<IProductSearchState>) =>
    dispatch({ type: 'UPDATE_FILTERS', filters });

  const clearFilters = () => dispatch({ type: 'CLEAR_FILTERS' });

  return { filters, setFilters, clearFilters };
};

export default useProductSearch;
