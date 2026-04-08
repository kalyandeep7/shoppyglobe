// Cart.jsx - Shows all cart items with total price and checkout button
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Get cart items and total from Redux selectors
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-list">
        {/* Render each cart item with unique key */}
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;