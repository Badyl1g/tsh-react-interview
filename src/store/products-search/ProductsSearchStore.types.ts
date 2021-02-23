export interface IProductSearchState {
  search: string;
  limit: number;
  page: number;
  promo: boolean | null;
  active: boolean | null;
}

export type ProductSearchAction =
  | { type: 'UPDATE_FILTERS'; filters: Partial<IProductSearchState> }
  | { type: 'CLEAR_FILTERS' };
