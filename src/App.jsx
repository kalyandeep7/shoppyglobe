// App.jsx - Main component with routing setup using createBrowserRouter
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';

// Lazy load all components for code splitting & performance optimization
const ProductList  = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart         = lazy(() => import('./components/Cart'));
const Checkout     = lazy(() => import('./components/Checkout'));
const NotFound     = lazy(() => import('./components/NotFound'));

// Root layout: Header + page content
const Layout = () => (
  <>
    <Header />
    {/* Suspense fallback shown while lazy components load */}
    <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
      <Outlet />
    </Suspense>
  </>
);

// createBrowserRouter (modern API with better data handling)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true,          element: <ProductList /> },
      { path: 'product/:id',  element: <ProductDetail /> }, // Dynamic route
      { path: 'cart',         element: <Cart /> },
      { path: 'checkout',     element: <Checkout /> },
      { path: '*',            element: <NotFound /> },
    ],
  },
]);

// App component
const App = () => <RouterProvider router={router} />;

export default App;