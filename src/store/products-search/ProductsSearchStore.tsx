import React from 'react';
import { useQuery } from 'react-query';

import {
  ProductSearchAction,
  IProductSearchState,
} from './ProductsSearchStore.types';
import {
  ProductsSearchStateContext,
  ProductsDispatchContext,
  initialState,
  ProdutsContext,
} from './ProductsSearchContext';
import { getProducts } from 'api/client';
import { IProductsResponse } from 'api/client.types';

const reducer = (
  state: IProductSearchState = initialState,
  action: ProductSearchAction
) => {
  switch (action.type) {
    case 'UPDATE_FILTERS':
      return { ...state, ...action.filters };

    case 'CLEAR_FILTERS':
      return initialState;

    default:
      return state;
  }
};

const ProductsStore: React.FC = ({ children }) => {
  const [filters, dispatch] = React.useReducer(reducer, initialState);

  const queryData = useQuery<IProductsResponse>(
    ['products', filters],
    () => getProducts(filters),
    { keepPreviousData: true }
  );

  return (
    <ProductsSearchStateContext.Provider value={filters}>
      <ProductsDispatchContext.Provider value={dispatch}>
        <ProdutsContext.Provider value={queryData}>
          {children}
        </ProdutsContext.Provider>
      </ProductsDispatchContext.Provider>
    </ProductsSearchStateContext.Provider>
  );
};

export default ProductsStore;
