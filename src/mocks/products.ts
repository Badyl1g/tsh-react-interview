import { IProduct, IProductsResponse } from 'api/client.types';

export const mockProduct: IProduct = {
  id: 2,
  name: 'Incredible Wooden Sausages',
  description: 'Ratione voluptas cum est corrupti at autem temporibus quis.',
  rating: 3,
  image: 'https://picsum.photos/640/480?random=1670',
  promo: false,
  active: true,
};

export const mockProductsList = Array.from({ length: 3 }).map((_, index) => ({
  ...mockProduct,
  id: index + 1,
}));

export const mockProductsResponse: IProductsResponse = {
  items: mockProductsList,
  meta: {
    totalItems: 500,
    itemCount: 8,
    itemsPerPage: 8,
    totalPages: 63,
    currentPage: 1,
  },
  links: {
    first: 'https://join-tsh-api-staging.herokuapp.com/products?limit=8',
    previous: '',
    next: 'https://join-tsh-api-staging.herokuapp.com/products?page=2&limit=8',
    last: 'https://join-tsh-api-staging.herokuapp.com/products?page=63&limit=8',
  },
};
