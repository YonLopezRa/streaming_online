import { Link } from 'react-router-dom';
import '../styles/components.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="movie-card__image"
        />
      </Link>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__year">{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;