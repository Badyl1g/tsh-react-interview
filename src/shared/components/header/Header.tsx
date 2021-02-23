import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

export const Header: React.FC = ({ children }) => {
  return (
    <header>
      <h1>Header</h1>

      <Link to={AppRoute.home}>Home</Link>
      <Link to={AppRoute.login}>Login</Link>

      <div>{children}</div>
    </header>
  );
};
