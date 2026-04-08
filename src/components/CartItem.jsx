// CartItem.jsx - Single item in cart with quantity controls and remove button
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

// Props: item object from cart state
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div className="quantity-controls">
          {/* Decrease quantity — won't go below 1 (enforced in reducer) */}
          <button className="qty-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button className="qty-btn" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      {/* Remove item from cart entirely */}
      <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
};

export default CartItem;