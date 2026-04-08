import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

// Props: product object passed from ProductList
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // Dispatch addToCart action with product data
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    }));
  };

  return (
    <div className="product-card">
      {/* Lazy loaded product image */}
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      {/* Link to dynamic product detail route */}
      <Link to={`/product/${product.id}`} className="btn btn-outline">View Details</Link>
      <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
export default ProductItem;