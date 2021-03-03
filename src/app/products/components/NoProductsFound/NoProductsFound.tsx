import React from 'react';

import ErrorMessage from 'shared/components/error-message/ErrorMessage';

import { ReactComponent as ListEmptyIcon } from 'assets/icons/list-empty.svg';

const NoProductsFound = () => (
  <ErrorMessage
    icon={<ListEmptyIcon />}
    error={{
      title: "Ooops... It's empty here",
      description: 'There are no products on the list',
    }}
  />
);

export default NoProductsFound;
