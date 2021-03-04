import React from 'react';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';

import ProductsListItem from '../products-list-item/ProductsListItem';
import NoProductsFound from '../no-products-found/NoProductsFound';

import { IProductsListProps } from './ProductsList.types';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
}));

const ProductsList: React.FC<IProductsListProps> = ({
  products,
  className,
  ...rest
}) => {
  const classes = useStyles();

  if (!products.length) {
    return <NoProductsFound />;
  }

  return (
    <ul className={clsx(classes.root, className)} {...rest}>
      <Grid spacing={4} container>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} lg={3} item>
            <ProductsListItem product={product} />
          </Grid>
        ))}
      </Grid>
    </ul>
  );
};

export default ProductsList;
