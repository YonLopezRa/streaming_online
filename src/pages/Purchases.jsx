import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/main.css';

function Purchases() {
  const [purchases, setPurchases] = useState([]);
  // Simular datos de compras
  useEffect(() => {
    const savedPurchases = localStorage.getItem('moviePurchases');
    if (savedPurchases) {
      setPurchases(JSON.parse(savedPurchases));
    } else {
      // Datos mock iniciales
      const mockPurchases = [
        {
          id: 1,
          movieId: 1,
          title: "El Padrino",
          image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          date: "2023-05-15T12:00:00Z",
          price: 9.99
        }
      ];
      setPurchases(mockPurchases);
      localStorage.setItem('moviePurchases', JSON.stringify(mockPurchases));
    }
  }, []);

  return (
    <div className="purchases-page">
      <h1>Mis Compras</h1>
      
      {purchases.length === 0 ? (
        <p className="no-purchases">No has comprado películas aún</p>
      ) : (
        <div className="purchases-grid">
          {purchases.map(purchase => (
            <div key={purchase.id} className="purchase-item">
              <MovieCard movie={{
                id: purchase.movieId,
                title: purchase.title,
                image: purchase.image,
                year: new Date(purchase.date).getFullYear()
              }} />
              
              <div className="purchase-info">
                <p>Comprado el: {new Date(purchase.date).toLocaleDateString()}</p>
                <p>Precio: ${purchase.price}</p>
                <button className="button button--primary">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Purchases;