import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components.css';

function ErrorMessage({ message }) {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>{message}</p>
      <button 
        onClick={() => navigate('/catalog')}
        className="button button--primary"
      >
        Volver al catálogo
      </button>
    </div>
  );
}

export default ErrorMessage;