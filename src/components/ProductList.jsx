// ProductList.jsx - Fetches and displays all products; includes search filter via Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { setSearchQuery, selectSearchQuery } from '../redux/searchSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  // Get search query from Redux state
  const searchQuery = useSelector(selectSearchQuery);

  // Use custom hook to fetch products
  const { products, loading, error } = useFetchProducts('https://dummyjson.com/products?limit=30');

  // Filter products based on Redux search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="status-msg">Loading products...</div>;
  if (error)   return <div className="status-msg error">Error: {error}</div>;

  return (
    <div className="product-list-page">
      <h2>Products</h2>

      {/* Search bar — updates Redux search state */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />

      {/* Product grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            // Unique key for each list item
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
export default ProductList;