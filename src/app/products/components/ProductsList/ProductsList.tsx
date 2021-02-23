import React from 'react';
import { ProductsListItem } from '../ProductsListItem/ProductsListItem';
import { IProductsListProps } from './ProductsList.types';

export const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  if (!products.length) {
    return <p>Ooops... It's empty here</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
