import { useState } from 'react';

function useRental() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addRental = (movie, days, email) => {
    setLoading(true);
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
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
        setLoading(false);
        resolve(newRental);
      }, 1000);
    });
  };

  const removeRental = (id) => {
    setRentals(prev => prev.filter(rental => rental.id !== id));
  };

  return { rentals, addRental, removeRental, loading, error };
}

export default useRental;