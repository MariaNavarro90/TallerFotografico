import useFetchItemsByCategory from '../hooks/useFetchItemsByCategory';

const FetchItems = ({ categoryId, render }) => {
  const { items, loading } = useFetchItemsByCategory(categoryId);

  return render({ items, loading });
};

export default FetchItems;