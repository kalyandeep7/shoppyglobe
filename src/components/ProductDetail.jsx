// ProductDetail.jsx - Fetches and shows detailed info for a single product using route params
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();        // Get product ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  // Fetch product details when component mounts or ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="status-msg">Loading product details...</div>;
  if (error)   return <div className="status-msg error">Error: {error}</div>;

  return (
    <div className="product-detail">
      <button className="btn btn-outline back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-content">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="detail-category">Category: {product.category}</p>
          <p className="detail-description">{product.description}</p>
          <p className="price">${product.price}</p>
          <p>Rating: ⭐ {product.rating}</p>
          <p>Stock: {product.stock} units</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
            }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};