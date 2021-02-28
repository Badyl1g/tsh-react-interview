import React from 'react';

import { Grid, Icon, makeStyles, Typography } from '@material-ui/core';

import Card from 'shared/components/card/Card';
import { ReactComponent as ListEmptyIcon } from 'assets/icons/list-empty.svg';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    margin: 'auto',
    maxWidth: 600,
    padding: '100px 0',
  },
}));

const NoProductsFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid alignItems="center" direction="column" container>
        <Grid item>
          <Icon>
            <ListEmptyIcon />
          </Icon>
        </Grid>

        <Grid item>
          <Typography align="center">Ooops... It's empty here</Typography>

          <Typography color="textSecondary" align="center">
            There are no products on the list
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NoProductsFound;
