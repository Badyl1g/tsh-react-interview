import { useProductsPagination } from 'store/products-search/useProductsPagination';

export type ProductsPaginationProps = { onChange: () => void } & ReturnType<
  typeof useProductsPagination
>;
