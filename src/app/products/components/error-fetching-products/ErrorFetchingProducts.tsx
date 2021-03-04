import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import ErrorMessage from 'shared/components/error-message/ErrorMessage';

const ErrorFetchingProducts = () => (
  <ErrorMessage
    icon={<ErrorOutlineIcon fontSize="large" />}
    error={{
      title: 'We are having some issues',
      description: 'Please try again or contact us: help@tsh.io',
    }}
  />
);

export default ErrorFetchingProducts;
