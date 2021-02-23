import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import { IProductsUrlParams } from './Product.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { getProduct } from 'api/client';
import { IProduct } from 'api/client.types';

export const Product = () => {
  const { id } = useParams<IProductsUrlParams>();

  const { data, status } = useQuery<IProduct>(['product', id], () =>
    getProduct(id)
  );

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}

      {status === 'error' && <p>Fetching failed</p>}

      {status === 'success' && (
        <div style={{ border: '3px solid red', padding: 6 }}>
          {data?.name} <Link to={AppRoute.home}>close</Link>
        </div>
      )}
    </>
  );
};
