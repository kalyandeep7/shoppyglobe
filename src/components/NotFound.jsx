// NotFound.jsx - 404 page shown for unknown routes
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
  // useRouteError gives error details when used as errorElement in router
  const error = useRouteError();

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      {/* Display route error details if available */}
      {error && (
        <div className="error-details">
          <p><strong>Error:</strong> {error.statusText || error.message || 'Unknown error'}</p>
          <p><strong>Status:</strong> {error.status || 'N/A'}</p>
        </div>
      )}
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go Back Home</Link>
    </div>
  );
};

export default NotFound;