// Header.jsx - Navigation bar with cart icon showing item count
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice';

const Header = () => {
  // Get total cart item count from Redux store
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="header">
      <div className="header-logo">
        {/* Home link */}
        <Link to="/">🛒 ShoppyGlobe</Link>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        {/* Cart link with item count badge */}
        <Link to="/cart" className="cart-link">
          Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;