import { useState, useEffect } from 'react';
import { fetchItemsByCategory } from '../components/ItemListContainer';

const useFetchItemsByCategory = (categoryId) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await fetchItemsByCategory(categoryId);
      setItems(fetchedItems);
      setLoading(false);
    };

    fetchItems();
  }, [categoryId]);

  return { items, loading };
};

export default useFetchItemsByCategory;