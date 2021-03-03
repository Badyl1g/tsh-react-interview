import React from 'react';
import { QueryObserverResult } from 'react-query';

import { IProductsResponse } from 'api/client.types';
import {
  IProductSearchState,
  ProductSearchAction,
} from './ProductsSearchStore.types';

export const initialState: IProductSearchState = {
  search: '',
  limit: 8,
  page: 1,
  promo: null,
  active: null,
};

export const ProdutsContext = React.createContext<
  QueryObserverResult<IProductsResponse>
>(undefined!);

export const ProductsSearchStateContext = React.createContext(initialState);

export const ProductsDispatchContext = React.createContext<
  React.Dispatch<ProductSearchAction>
>(() => {});
