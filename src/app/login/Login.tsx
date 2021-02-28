import React from 'react';

import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import Header from 'shared/components/header/Header';
import heroImage from 'assets/images/bridge-runner.png';
import LoginForm from './components/LoginForm/LoginForm';

const useStyles = makeStyles(({ palette }) => ({
  root: { height: '100vh', background: palette.background.paper },
  side: {
    height: '100%',
  },
  heroImage: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
}));

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid className={classes.root} container>
      {!isSmallScreen ? (
        <Grid className={classes.side} md={5} item>
          <img
            className={classes.heroImage}
            src={heroImage}
            alt="Running man"
          />
        </Grid>
      ) : null}

      <Grid className={classes.side} xs={12} md={7} item>
        <Header simple />

        <Container>
          <Typography variant="h4">Login</Typography>

          <LoginForm onSubmit={() => {}} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
