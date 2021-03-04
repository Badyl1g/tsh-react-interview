import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, OutlinedInput, Typography } from '@material-ui/core';

import { AppRoute } from 'routing/AppRoute.enum';

import { ILoginFormProps } from './LoginForm.types';

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid spacing={2} container>
        <Grid xs={12} item>
          <label htmlFor="username">Username</label>

          <OutlinedInput
            id="username"
            margin="dense"
            placeholder="Enter username"
            fullWidth
          />
        </Grid>

        <Grid xs={12} item>
          <label htmlFor="password">Password</label>

          <OutlinedInput
            id="password"
            margin="dense"
            type="password"
            placeholder="Enter password"
            fullWidth
          />
        </Grid>

        <Grid xs={12} item>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            submit
          </Button>
        </Grid>

        <Grid xs={12} item>
          <Typography color="textSecondary" component={Link} to={AppRoute.home}>
            Forgot your password?
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
