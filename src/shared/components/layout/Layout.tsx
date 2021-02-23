import React from 'react';

import { ILayoutProps } from './Layout.types';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

export const Layout: React.FC<ILayoutProps> = ({
  noHeader = false,
  renderHeaderContent,
  children,
}) => (
  <div>
    {!noHeader && <Header>{renderHeaderContent?.()}</Header>}

    <main>{children}</main>

    <Footer />
  </div>
);
