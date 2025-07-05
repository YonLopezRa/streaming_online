import React, { useState } from 'react';
import '../styles/components.css';

function PurchaseForm({ movie, onClose }) {
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
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
          <h3>¡Compra exitosa!</h3>
          <p>Has comprado "{movie.title}" por ${movie.price}.</p>
          <p>Ahora es tuya para siempre. Se ha enviado un correo a {email} con los detalles.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>×</button>
        <h3>Comprar: {movie.title}</h3>
        <p>Precio: ${movie.price}</p>
        
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
            <label>Método de pago:</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit">Tarjeta de crédito</option>
              <option value="debit">Tarjeta de débito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Procesando...' : 'Confirmar Compra'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PurchaseForm;