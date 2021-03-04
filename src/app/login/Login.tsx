import React from 'react';
import clsx from 'clsx';
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

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: { height: '100vh', background: palette.background.paper },
  side: {
    height: '100%',
  },
  left: {
    display: 'flex',
  },
  heroImage: {
    width: '100%',
    objectFit: 'cover',
    flexGrow: 1,
  },
  right: {
    [breakpoints.up('md')]: {
      padding: `0 ${spacing(12)}px`,
    },
    [breakpoints.down('md')]: {
      padding: `0 ${spacing(1)}px`,
    },
  },
  formContainer: {
    [breakpoints.up('md')]: {
      marginTop: spacing(16),
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid className={classes.root} container>
      {!isSmallScreen ? (
        <Grid className={clsx(classes.side, classes.left)} md={5} item>
          <img
            className={classes.heroImage}
            src={heroImage}
            alt="Running man"
          />
        </Grid>
      ) : null}

      <Grid className={clsx(classes.side, classes.right)} xs={12} md={7} item>
        <Header simple />

        <Container className={classes.formContainer} maxWidth="lg" fixed>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>

          <LoginForm onSubmit={() => {}} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
