// Checkout.jsx - Dummy form + cart summary; clears cart and redirects after order
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const items    = useSelector(selectCartItems);
  const total    = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local form state
  const [form, setForm] = useState({ name: '', email: '', address: '', phone: '' });
  const [ordered, setOrdered] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePlaceOrder = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert('Please fill all fields');
      return;
    }
    setOrdered(true);
    // Clear cart in Redux store
    dispatch(clearCart());
    // Redirect to home after 2 seconds
    setTimeout(() => navigate('/'), 2000);
  };

  if (ordered) {
    return (
      <div className="order-success">
        <h2>✅ Order Placed!</h2>
        <p>Thank you for shopping with ShoppyGlobe. Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-container">

        {/* User details form */}
        <div className="checkout-form">
          <h3>Your Details</h3>
          <input name="name"    placeholder="Full Name"     value={form.name}    onChange={handleChange} />
          <input name="email"   placeholder="Email"         value={form.email}   onChange={handleChange} type="email" />
          <input name="phone"   placeholder="Phone Number"  value={form.phone}   onChange={handleChange} />
          <input name="address" placeholder="Delivery Address" value={form.address} onChange={handleChange} />
        </div>

        {/* Order summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {items.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.title} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <h4>Total: ${total.toFixed(2)}</h4>
          <button className="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;