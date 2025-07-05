import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import useMovies from '../hooks/useMovies';
import '../styles/main.css';

function Catalog() {
  const { movies, loading, error, searchMovies } = useMovies();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const results = searchMovies(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  if (loading) return <div className="loading">Cargando películas...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  // Películas a mostrar (resultados de búsqueda o todas las películas)
  const displayedMovies = searchQuery ? searchResults : movies;

  return (
    <div className="catalog">
      <h1 className="catalog__title">Catálogo de Películas</h1>
      <SearchBar onSearch={handleSearch} />
      
      {displayedMovies.length === 0 ? (
        <p className="no-results">No se encontraron películas</p>
      ) : (
        <div className="catalog__grid">
          {displayedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}


export default Catalog;