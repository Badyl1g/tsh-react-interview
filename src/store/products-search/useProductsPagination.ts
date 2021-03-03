import useProducts from './useProducts';
import useProductSearch from './useProductsSearch';

const useProductsPagination = () => {
  const queryData = useProducts();
  const { filters, setFilters } = useProductSearch();

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

export default useProductsPagination;
