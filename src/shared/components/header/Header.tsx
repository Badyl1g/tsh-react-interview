import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar as MatAppBar,
  Button,
  Grid,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
  withStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { AppRoute } from 'routing/AppRoute.enum';
import { IHeaderProps } from './Header.types';

const AppBar = withStyles(({ palette }) => ({
  root: {
    minHeight: 144,
    backgroundColor: palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
  },
}))(MatAppBar);

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  container: {
    marginTop: spacing(4),
    marginBottom: spacing(2),

    [breakpoints.down('md')]: {
      marginLeft: spacing(),
      marginRight: spacing(),
    },
  },
  link: {
    textDecoration: 'none',
    fontWeight: 600,
  },
  grow: {
    flexGrow: 1,
  },
  searchArea: {
    [breakpoints.up('md')]: {
      marginLeft: spacing(8),
    },
    [breakpoints.down('md')]: {
      marginTop: spacing(2),
    },
  },
}));

const Header: React.FC<IHeaderProps> = ({ children, simple = false }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const smallHeader = (
    <Grid alignItems="center" className={classes.container} container>
      <Grid item>
        <Link className={classes.link} to={AppRoute.home}>
          <Typography color="textPrimary" variant="h5">
            join.tsh.io
          </Typography>
        </Link>
      </Grid>

      <div className={classes.grow} />

      {!simple ? (
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={AppRoute.login}
          >
            Log in
          </Button>
        </Grid>
      ) : null}

      <Grid className={classes.searchArea} xs={12} item>
        {children}
      </Grid>
    </Grid>
  );

  const desktopHeader = (
    <Grid alignItems="center" container>
      <Grid item>
        <Link className={classes.link} to={AppRoute.home}>
          <Typography color="textPrimary" variant="h5">
            join.tsh.io
          </Typography>
        </Link>
      </Grid>

      <Grid className={classes.searchArea} item>
        {children}
      </Grid>

      <div className={classes.grow} />

      {!simple ? (
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={AppRoute.login}
          >
            Log in
          </Button>
        </Grid>
      ) : null}
    </Grid>
  );

  return (
    <AppBar color="default" position="static" elevation={0}>
      <Container maxWidth="lg" fixed>
        <Toolbar disableGutters>
          {isSmallScreen ? smallHeader : desktopHeader}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
