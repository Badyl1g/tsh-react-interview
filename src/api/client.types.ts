export interface IProductsResponse {
  items: IProduct[];
  meta: PaginateMeta;
  links: PaginateLinks;
  error?: any;
}

interface PaginateMeta {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface PaginateLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}
