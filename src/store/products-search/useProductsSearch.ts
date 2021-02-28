import React from 'react';
// import { useQuery } from 'react-query';

// import { getProducts } from 'api/client';
// import { IProductsResponse } from 'api/client.types';
import {
  ProductsSearchStateContext,
  ProductsDispatchContext,
  ProdutsContext,
} from 'store/products-search/ProductsSearchContext';
import { IProductSearchState } from 'store/products-search/ProductsSearchStore.types';

// export const useProductSearch = () => {
//   const filters = React.useContext(ProductsSearchStateContext);
//   const dispatch = React.useContext(ProductsDispatchContext);
//   const queryData = React.useContext(ProdutsContext);

//   // const queryData = useQuery<IProductsResponse>(
//   //   ['products', filters],
//   //   () => getProducts(filters),
//   //   { keepPreviousData: true }
//   // );

//   // const setFilters = (filters: Partial<IProductSearchState>) =>
//   //   dispatch({ type: 'UPDATE_FILTERS', filters });

//   // const clearFilters = () => dispatch({ type: 'CLEAR_FILTERS' });

//   return { filters, queryData, setFilters, clearFilters };
// };

export const useProducts = () => React.useContext(ProdutsContext);

export const useProductSearch = () => {
  const filters = React.useContext(ProductsSearchStateContext);
  const dispatch = React.useContext(ProductsDispatchContext);

  const setFilters = (filters: Partial<IProductSearchState>) =>
    dispatch({ type: 'UPDATE_FILTERS', filters });

  const clearFilters = () => dispatch({ type: 'CLEAR_FILTERS' });

  return { filters, setFilters, clearFilters };
};
