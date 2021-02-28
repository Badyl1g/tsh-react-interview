import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography color="textSecondary">join.tsh.io</Typography>
    </footer>
  );
};

export default Footer;
