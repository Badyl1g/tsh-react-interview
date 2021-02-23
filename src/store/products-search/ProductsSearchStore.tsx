import React from 'react';

import {
  ProductSearchAction,
  IProductSearchState,
} from './ProductsSearchStore.types';
import {
  ProductsSearchStateContext,
  ProductsDispatchContext,
  initialState,
} from './ProductsSearchContext';

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

export const ProductsStore: React.FC = ({ children }) => {
  const [filters, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ProductsSearchStateContext.Provider value={filters}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsSearchStateContext.Provider>
  );
};
