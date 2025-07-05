import React from 'react';
import '../styles/utilities.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__circle"></div>
      <p>Cargando...</p>
    </div>
  );
}

export default LoadingSpinner;