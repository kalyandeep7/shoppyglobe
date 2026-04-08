// useFetchProducts.js - Custom hook to fetch product list from API
import { useState, useEffect } from 'react';

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);  // Fetched products
  const [loading, setLoading] = useState(true);   // Loading state
  const [error, setError] = useState(null);        // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        // Gracefully handle fetch errors
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, loading, error };
};

export default useFetchProducts;