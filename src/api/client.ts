import { IProduct, IProductsResponse } from './client.types';
import { IProductSearchState } from 'store/products-search/ProductsSearchStore.types';

export const getProducts = async (
  filters: IProductSearchState
): Promise<IProductsResponse> => {
  const searchParams = new URLSearchParams(
    Object.entries(filters).filter(([, value]) => value !== null)
  );

  return fetch(
    `${process.env.REACT_APP_API_URL}/products?${searchParams}`
  ).then((r) => {
    if (!r.ok) throw new Error(r.statusText);
    return r.json();
  });
};

export const getProduct = async (id: string): Promise<IProduct> =>
  fetch(`${process.env.REACT_APP_API_URL}/products/${id}`).then((r) => {
    if (!r.ok) throw new Error(r.statusText);
    return r.json();
  });
