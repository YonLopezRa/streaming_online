import { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

function useRental() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addRental = async (movie, days, email) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/rentals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId: movie.id,
          title: movie.title,
          days,
          email,
          price: movie.rentalPrice * days,
          imageUrl: movie.image
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Rental failed');
      }
      
      const newRental = await response.json();
      setRentals(prev => [...prev, newRental]);
      return newRental;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getRentals = async (email) => {
    try {
      // En una app real, esto vendría de la API
      // Simulamos que obtenemos los rentals del localStorage como fallback
      const savedRentals = localStorage.getItem('movieRentals');
      if (savedRentals) {
        setRentals(JSON.parse(savedRentals));
      }
    } catch (err) {
      setError('Error loading rentals');
    }
  };

  // Función para simular rentals (para desarrollo)
  const simulateRental = (movie, days, email) => {
    const newRental = {
      id: Date.now(),
      movieId: movie.id,
      title: movie.title,
      image: movie.image,
      date: new Date().toISOString(),
      expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString(),
      price: movie.rentalPrice * days,
      email
    };
    
    setRentals(prev => [...prev, newRental]);
    // Guardar en localStorage para persistencia
    localStorage.setItem('movieRentals', JSON.stringify([...rentals, newRental]));
    
    return Promise.resolve(newRental);
  };

  return { 
    rentals, 
    addRental: process.env.REACT_APP_ENVIRONMENT === 'development' ? simulateRental : addRental,
    getRentals, 
    loading, 
    error 
  };
}

export default useRental;