import React from 'react';
import { useParams } from 'react-router';

import { Product } from 'app/product/Product';
import { Layout } from 'shared/components/layout/Layout';
import { IProductsUrlParams } from 'app/product/Product.types';
import { ProductsList } from './components/ProductsList/ProductsList';
import { useProductSearch } from 'store/products-search/useProductsSearch';
import { ProductFilters } from 'shared/components/product-filters/ProductFilters';
import { ProductsPagination } from './components/ProductsPagination/ProductsPagination';

export const Products = () => {
  const {
    queryData: { data, status },
  } = useProductSearch();

  const { id } = useParams<IProductsUrlParams>();

  return (
    <Layout renderHeaderContent={ProductFilters}>
      <h2>Products page</h2>

      {id ? <Product /> : null}

      {status === 'loading' && (
        <ul style={{ height: 216 }}>
          <p>Loading...</p>
        </ul>
      )}

      {status === 'error' && <p>Fetching failed</p>}

      {status === 'success' && !!data?.items && (
        <ProductsList products={data.items} />
      )}

      <ProductsPagination />
    </Layout>
  );
};
