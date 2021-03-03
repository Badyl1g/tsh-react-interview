import React from 'react';

import { ProdutsContext } from './ProductsSearchContext';

const useProducts = () => React.useContext(ProdutsContext);

export default useProducts;
