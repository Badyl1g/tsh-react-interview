import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { AppRoute } from 'routing/AppRoute.enum';
import { getProduct } from 'api/client';
import { IProduct } from 'api/client.types';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import { IProductsUrlParams } from './Product.types';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    background: palette.background.default,
    '&:hover, &:active, &:focus': {
      backgroundColor: palette.background.default,
    },
  },
  media: {
    height: 300,
  },
  nameSkeleton: {
    height: 32,
  },
  descSkeleton: {
    height: 24,
    marginTop: 12,
  },
  errorMessage: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Product = () => {
  const { id } = useParams<IProductsUrlParams>();

  const { data: product, status } = useQuery<IProduct>(
    ['product', id],
    () => getProduct(id),
    { enabled: !!id }
  );

  const classes = useStyles();

  return (
    <>
      <Card>
        <IconButton
          aria-label="back"
          className={classes.closeButton}
          component={Link}
          to={AppRoute.home}
        >
          <CloseIcon />
        </IconButton>

        {status === 'loading' && (
          <>
            <Skeleton variant="rect" className={classes.media} />

            <CardContent>
              <Skeleton variant="rect" className={classes.nameSkeleton} />

              <Skeleton variant="rect" className={classes.descSkeleton} />
            </CardContent>
          </>
        )}

        {status === 'error' && (
          <CardContent className={classes.errorMessage}>
            <Typography variant="h5">Fetching product failed</Typography>

            <Typography variant="h6">
              Try again or contact us: contact@tsh.io
            </Typography>
          </CardContent>
        )}

        {status === 'success' && product && (
          <>
            <CardMedia
              image={product.image}
              title={product.name}
              className={classes.media}
            />

            <CardContent>
              <Typography variant="h5">{product.name}</Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </>
        )}
      </Card>
    </>
  );
};

export default Product;
