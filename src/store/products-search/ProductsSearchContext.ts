import React from 'react';

import {
  IProductSearchState,
  ProductSearchAction,
} from './ProductsSearchStore.types';

export const initialState: IProductSearchState = {
  search: '',
  limit: 10,
  page: 1,
  promo: null,
  active: null,
};

export const ProductsSearchStateContext = React.createContext(initialState);

export const ProductsDispatchContext = React.createContext<
  React.Dispatch<ProductSearchAction>
>(() => {});
