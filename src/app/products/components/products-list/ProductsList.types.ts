import { IProduct } from 'api/client.types';

export interface IProductsListProps {
  products: IProduct[];
  className?: string;
}
