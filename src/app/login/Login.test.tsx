import React from 'react';

import { render } from 'tests';

import Login from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByLabelText } = render(<Login />);

    getByLabelText(/username/i);
    getByLabelText(/password/i);
  });
});
