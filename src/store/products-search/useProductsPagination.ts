import { useProductSearch } from './useProductsSearch';

export const useProductsPagination = () => {
  const { filters, setFilters, queryData } = useProductSearch();

  const prevPage = () => setFilters({ page: filters.page - 1 });

  const nextPage = () => setFilters({ page: filters.page + 1 });

  const changePage = (page: number) => setFilters({ page });

  return {
    totalPages: queryData.data?.meta.totalPages,
    page: filters.page,
    prevPage,
    nextPage,
    changePage,
  };
};
