import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from 'app/login/Login';
import Products from 'app/products/Products';

import { AppRoute } from './AppRoute.enum';

const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path={[AppRoute.home, AppRoute.product]}
        exact
        component={Products}
      />
      <Route path={AppRoute.login} component={Login} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};

export default AppRoutes;
