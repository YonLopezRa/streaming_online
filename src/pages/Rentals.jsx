import React from 'react';
import useRental from '../hooks/useRental';
import MovieCard from '../components/MovieCard';
import '../styles/main.css';

function Rentals() {
  const { rentals, removeRental, loading } = useRental();

  if (loading) return <div className="loading">Cargando tus alquileres...</div>;

  return (
    <div className="rentals-page">
      <h1>Mis Alquileres</h1>
      
      {rentals.length === 0 ? (
        <p className="no-rentals">No tienes películas alquiladas actualmente</p>
      ) : (
        <div className="rentals-grid">
          {rentals.map(rental => (
            <div key={rental.id} className="rental-item">
              <MovieCard movie={{
                id: rental.movieId,
                title: rental.title,
                image: rental.image,
                year: new Date(rental.date).getFullYear()
              }} />
              
              <div className="rental-info">
                <p>Alquilado el: {new Date(rental.date).toLocaleDateString()}</p>
                <p>Expira el: {new Date(rental.expires).toLocaleDateString()}</p>
                <p>Precio: ${rental.price}</p>
                <button 
                  onClick={() => removeRental(rental.id)}
                  className="button button--danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Rentals;