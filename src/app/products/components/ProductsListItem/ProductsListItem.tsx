import React from 'react';
import { generatePath, Link } from 'react-router-dom';

import {
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { AppRoute } from 'routing/AppRoute.enum';
import { IProductsListItemProps } from './ProductsListItem.types';
import Card from 'shared/components/card/Card';
import Badge from 'shared/components/badge/Badge';

const useStyles = makeStyles({
  root: {
    listStyle: 'none',
    textDecoration: 'none',
    position: 'relative',
    margin: 0,
    padding: 0,
  },
  card: {
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 200,
  },
  promoChip: {
    position: 'absolute',
    top: 20,
    left: 0,
  },
  cardActions: {
    marginTop: 'auto',
  },
  cardActionsGrid: {
    padding: '16px 8px',
  },
});

const ProductsListItem: React.FC<IProductsListItemProps> = ({ product }) => {
  const classes = useStyles();

  return (
    <li className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={product.image} />

        {product.promo ? (
          <Badge
            className={classes.promoChip}
            label="Promo"
            color="secondary"
          />
        ) : null}

        <CardContent>
          <Typography variant="h5">{product.name}</Typography>

          <Typography variant="body1">{product.description}</Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Grid className={classes.cardActionsGrid} spacing={2} container>
            <Grid xs={12} item>
              <Rating value={product.rating} readOnly />
            </Grid>

            <Grid xs={12} item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={generatePath(AppRoute.product, { id: product.id })}
                fullWidth
                disabled={!product.active}
              >
                {product.active ? 'Show details' : 'Unavailable'}
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </li>
  );
};

export default ProductsListItem;
