import React from 'react';
import { Grid, Icon, makeStyles, Typography } from '@material-ui/core';

import Card from '../card/Card';

import { IErrorMessageProps } from './ErrorMessage.types';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    margin: 'auto',
    maxWidth: 600,
    padding: '100px 0',
  },
  icon: {
    marginBottom: spacing(1),
  },
}));

const ErrorMessage: React.FC<IErrorMessageProps> = ({
  icon,
  error: { title, description },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid alignItems="center" direction="column" container>
        {icon ? (
          <Grid className={classes.icon} item>
            <Icon>{icon}</Icon>
          </Grid>
        ) : null}

        <Grid item>
          <Typography align="center" gutterBottom>
            {title}
          </Typography>

          {description ? (
            <Typography color="textSecondary" align="center">
              {description}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ErrorMessage;
