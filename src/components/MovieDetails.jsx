import React from 'react';
import '../styles/components.css';

function MovieDetails({ movie }) {
  const reactions = [
    {
      id: 1,
      comment: "¡Una película increíble! La trama me mantuvo en suspenso todo el tiempo.",
      rating: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      id: 2,
      comment: "Excelente dirección y actuaciones. Definitivamente la recomiendo.",
      rating: "⭐️⭐️⭐️⭐️☆"
    },
    {
      id: 3,
      comment: "No es lo que esperaba, pero tiene momentos memorables.",
      rating: "⭐️⭐️⭐️☆☆"
    }
  ];

  return (
    <div className="movie-details__content">
      <h2>Sinopsis</h2>
      <p>{movie.synopsis}</p>
      
      <h2>Reacciones</h2>
      <div className="reactions-grid">
        {reactions.map((reaction) => (
          <div key={reaction.id} className="reaction-card">
            <p className="reaction-comment">{reaction.comment}</p>
            <div className="reaction-rating">{reaction.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;