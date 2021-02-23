import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { Layout } from 'shared/components/layout/Layout';

export const Login = () => {
  return (
    <Layout noHeader>
      <Link to={AppRoute.home}>Products page</Link>

      <h2>Login</h2>

      <form>
        <div>
          <label>
            username:
            <input name="username" />
          </label>
        </div>

        <div>
          <label>
            password:
            <input name="password" type="password" />
          </label>
        </div>

        <button type="submit">submit</button>
      </form>
    </Layout>
  );
};
