import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import Footer from '../footer/Footer';
import Header from '../header/Header';

import { ILayoutProps } from './Layout.types';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    minHeight: `calc(100vh - 144px - 64px)`,
    paddingTop: spacing(7),
  },
}));

const Layout: React.FC<ILayoutProps> = ({
  noHeader = false,
  renderHeaderContent,
  children,
}) => {
  const classes = useStyles();

  return (
    <div>
      {!noHeader && <Header>{renderHeaderContent?.()}</Header>}

      <main>
        <Container className={classes.container} maxWidth="lg" fixed>
          <>{children}</>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
