import React from 'react';
import '../styles/components.css';

function MovieDetails({ movie }) {
  return (
    <div className="movie-details__content">
      <h2>Sinopsis</h2>
      <p>{movie.synopsis}</p>
      
      <h2>Detalles</h2>
      <div className="movie-details__meta">
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Duración:</strong> {movie.duration} minutos</p>
        <p><strong>Género:</strong> {movie.genre.join(', ')}</p>
        <p><strong>Actores:</strong> {movie.actors.join(', ')}</p>
        <p><strong>Año:</strong> {movie.year}</p>
        <p><strong>Idioma:</strong> {movie.language || 'Español'}</p>
      </div>
    </div>
  );
}

export default MovieDetails;