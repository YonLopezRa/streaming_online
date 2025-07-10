import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import useRental from '../hooks/useRental';
import RentalForm from '../components/RentalForm';
import PurchaseForm from '../components/PurchaseForm';
import MovieDetails from '../components/MovieDetails';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/main.css';

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, loading: catalogLoading, error: catalogError } = useMovies();
  const { addRental } = useRental();
  const [movie, setMovie] = useState(null);
  const [movieLoading, setMovieLoading] = useState(true);
  const [movieError, setMovieError] = useState(null);
  const [showRentalForm, setShowRentalForm] = useState(false);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
  const fetchMovie = async () => {
    try {
      setMovieLoading(true);
      setMovieError(null);

      if (catalogLoading) return;
      if (catalogError) {
        throw new Error('Error al cargar el catálogo');
      }

      const foundMovie = movies.find(m => m.id === parseInt(id));
      if (!foundMovie) {
        throw new Error(`No se encontró la película con ID: ${id}`);
      }

      setTimeout(() => {
        setMovie(foundMovie);
        // Si la película tiene un idioma principal, lo selecciona; si no, deja vacío
        setSelectedLanguage(foundMovie.language || '');
        setMovieLoading(false);
      }, 500);
    } catch (err) {
      setMovieError(err.message);
      setMovieLoading(false);
    }
  };

    fetchMovie();
  }, [id, movies, catalogLoading, catalogError]);

  const handleRentalSubmit = async (email, days) => {
    try {
      await addRental(movie, days, email);
      navigate('/rentals', { state: { rentalSuccess: true } });
    } catch (err) {
      console.error('Error al alquilar:', err);
      setMovieError('Error al procesar el alquiler');
    }
  };

  // Estados de carga
  if (catalogLoading || movieLoading) {
    return (
      <div className="loading-container">
        <LoadingSpinner />
        <p>Cargando detalles de la película...</p>
      </div>
    );
  }

  // Manejo de errores
  if (catalogError || movieError) {
    return (
      <ErrorMessage 
        message={catalogError || movieError}
        onRetry={() => window.location.reload()}
        onBack={() => navigate('/catalog')}
      />
    );
  }

  // Película no encontrada (aunque esto ya lo maneja movieError)
  if (!movie) {
    return (
      <ErrorMessage 
        message="La película solicitada no está disponible"
        onBack={() => navigate('/catalog')}
      />
    );
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        {/* Encabezado con imagen e información básica */}
        <div className="movie-details__header">
          <div className="movie-poster-container">
            <img 
              src={movie.image} 
              alt={`Poster de ${movie.title}`} 
              className="movie-details__poster"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/300x450?text=Poster+No+Disponible';
              }}
            />
          </div>
          
          <div className="movie-info">
            <h1 className="movie-title">{movie.title} <span className="movie-year">({movie.year})</span></h1>
            
            <div className="movie-meta">
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Duración:</strong> {movie.duration} minutos</p>
              <p><strong>Género:</strong> {movie.genre.join(', ')}</p>
              <p><strong>Reparto:</strong> {movie.actors.join(', ')}</p>
              <p>
                <strong>Idioma:</strong>
                <select
                  value={selectedLanguage}
                  onChange={e => setSelectedLanguage(e.target.value)}
                  style={{ marginLeft: '0.5rem' }}
                >
                  {['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano'].map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </p>
              <p><strong>Valoración:</strong> {movie.rating || 'N/A'}/10</p>
            </div>
            
            <div className="movie-actions">
              <button 
                onClick={() => setShowRentalForm(true)}
                className="button button--primary action-button"
              >
                <span className="action-icon">🎬</span>
                <span className="action-text">Alquilar por ${movie.rentalPrice} (48h)</span>
              </button>
              <button 
                onClick={() => setShowPurchaseForm(true)}
                className="button button--secondary action-button"
              >
                <span className="action-icon">💳</span>
                <span className="action-text">Comprar por ${movie.price}</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Sección del tráiler */}
        <div className="trailer-section">
          <h2 className="section-title">Tráiler Oficial</h2>
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=0&rel=0`}
              title={`Tráiler de ${movie.title}`}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Detalles extendidos de la película */}
        <MovieDetails movie={movie} />
        
        {/* Formularios modales */}
        {showRentalForm && (
          <RentalForm 
            movie={movie}
            onSubmit={handleRentalSubmit}
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
    </div>
  );
}

export default Movie;