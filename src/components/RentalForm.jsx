import React, { useState } from 'react';
import '../styles/components.css';

function RentalForm({ movie, onClose }) {
  const [email, setEmail] = useState('');
  const [days, setDays] = useState(2);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío a API
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(onClose, 2000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="modal">
        <div className="modal__content">
          <h3>¡Alquiler exitoso!</h3>
          <p>Has alquilado "{movie.title}" por {days} días.</p>
          <p>Se ha enviado un correo a {email} con los detalles.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>×</button>
        <h3>Alquilar: {movie.title}</h3>
        <p>Precio: ${movie.rentalPrice * days} ({days} días)</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Correo electrónico:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Días de alquiler:</label>
            <select value={days} onChange={(e) => setDays(Number(e.target.value))}>
              <option value={1}>1 día - ${movie.rentalPrice * 1}</option>
              <option value={2}>2 días - ${movie.rentalPrice * 2}</option>
              <option value={3}>3 días - ${movie.rentalPrice * 3}</option>
              <option value={7}>1 semana - ${movie.rentalPrice * 7}</option>
            </select>
          </div>
          
          <button className="button button--primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Procesando...' : 'Confirmar Alquiler'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RentalForm;