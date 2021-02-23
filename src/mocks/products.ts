import { IProduct } from 'api/client.types';

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
