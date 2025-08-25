import { Link } from 'react-router-dom';
import '../styles/components.css';
import placeholderImage from '../images/placeholder.jpg';
function MovieCard({ movie }) {
  const getImageUrl = (url) => {
    if (!url) return placeholderImage;
    
    try {
      // Para imágenes locales
      if (url.includes('el_padrino')) {
        return require('../images/el_padrino.jpg').default;
      }
      if (url.includes('pulp_fiction')) {
        return require('../images/pulp_fiction.jpg').default;
      }
      if (url.includes('batman')) {
        return require('../images/batman.jpg').default;
      }
      
      // Para URLs externas
      return url;
    } catch (error) {
      return placeholderImage;
    }
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img 
          src={movie.imageUrl || placeholderImage} 
          alt={movie.title}
          className="movie-card__image"
          onError={(e) => {
            e.target.src = placeholderImage;
          }}
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