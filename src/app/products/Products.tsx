import React from 'react';
import { useParams } from 'react-router';
import { CircularProgress, Dialog, makeStyles } from '@material-ui/core';

import { IProductsUrlParams } from 'app/product/Product.types';
import Layout from 'shared/components/layout/Layout';
import Product from 'app/product/Product';
import ProductFilters from 'app/products/components/product-filters/ProductFilters';
import useProducts from 'store/products-search/useProducts';
import useProductsPagination from 'store/products-search/useProductsPagination';

import ErrorFetchingProducts from './components/error-fetching-products/ErrorFetchingProducts';
import ProductsPagination from './components/products-pagination/ProductsPagination';
import ProductsList from './components/products-list/ProductsList';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  loadingIconWrapper: {
    margin: `${spacing(4)}px auto ${spacing(10)}px`,
    display: 'flex',
    justifyContent: 'center',
  },
  productsList: {
    [breakpoints.down('md')]: {
      margin: `0 ${spacing()}px`,
    },
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${spacing(3)}px 0`,
  },
}));

const Products = () => {
  const { data: products, status } = useProducts();
  const { id } = useParams<IProductsUrlParams>();
  const paginationProps = useProductsPagination();
  const classes = useStyles();

  const handlePageChange = () => {
    requestAnimationFrame(() =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    );
  };

  return (
    <Layout renderHeaderContent={ProductFilters}>
      {status === 'loading' && (
        <CircularProgress
          title="Loading..."
          className={classes.loadingIconWrapper}
          color="primary"
        />
      )}

      {status === 'error' && <ErrorFetchingProducts />}

      {status === 'success' && !!products?.items && (
        <ProductsList
          className={classes.productsList}
          products={products.items}
        />
      )}

      <Dialog fullWidth open={!!id}>
        <Product />
      </Dialog>

      {products?.items.length ? (
        <div className={classes.paginationContainer}>
          <ProductsPagination
            {...paginationProps}
            onChange={handlePageChange}
          />
        </div>
      ) : null}
    </Layout>
  );
};

export default Products;
