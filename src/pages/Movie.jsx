import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import RentalForm from '../components/RentalForm';
import PurchaseForm from '../components/PurchaseForm';
import '../styles/main.css';

function Movie() {
  const { id } = useParams();
  const { movies } = useMovies();
  const [movie, setMovie] = useState(null);
  const [showRentalForm, setShowRentalForm] = useState(false);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  useEffect(() => {
    const foundMovie = movies.find(m => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id, movies]);

  if (!movie) return <div className="loading">Cargando...</div>;

  return (
    <div className="movie-details">
      <div className="movie-details__header">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="movie-details__poster"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
          }}
        />
        
        <div className="movie-details__info">
          <h1>{movie.title} ({movie.year})</h1>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Duración:</strong> {movie.duration} minutos</p>
          <p><strong>Género:</strong> {movie.genre.join(', ')}</p>
          <p><strong>Actores:</strong> {movie.actors.join(', ')}</p>
          
          <div className="movie-details__actions">
            <button 
              onClick={() => setShowRentalForm(!showRentalForm)}
              className="button button--primary"
            >
              Alquilar por ${movie.rentalPrice} (48h)
            </button>
            <button 
              onClick={() => setShowPurchaseForm(!showPurchaseForm)}
              className="button button--secondary"
            >
              Comprar por ${movie.price}
            </button>
          </div>
        </div>
      </div>
      
      <div className="movie-details__content">
        <h2>Sinopsis</h2>
        <p>{movie.synopsis}</p>
        
        <h2>Tráiler</h2>
        <div className="movie-details__trailer">
          <iframe
            src={`https://www.youtube.com/embed/${movie.trailerId}`}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {showRentalForm && (
        <RentalForm 
          movie={movie} 
          onClose={() => setShowRentalForm(false)} 
        />
      )}
      
      {showPurchaseForm && (
        <PurchaseForm 
          movie={movie} 
          onClose={() => setShowPurchaseForm(false)} 
        />
      )}
    </div>
  );
}

export default Movie;