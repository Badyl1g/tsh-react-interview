import React from 'react';
import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { IProductsListItemProps } from './ProductsListItem.types';

export const ProductsListItem: React.FC<IProductsListItemProps> = ({
  product,
}) => (
  <li>
    <Link to={generatePath(AppRoute.product, { id: product.id })}>
      {product.name} (Active: {product.active ? '👍' : '❌'}) (Promo:
      {product.promo ? '👍' : '❌'})
    </Link>
  </li>
);
