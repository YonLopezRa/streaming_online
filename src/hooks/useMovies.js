import { useState, useEffect } from 'react';
import moviesData from '../data/movies';

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando una llamada a API
    const fetchMovies = async () => {
      try {
        // Verifica que moviesData existe y es un array
        if (!moviesData || !Array.isArray(moviesData)) {
          throw new Error('Datos de películas no válidos');
        }
        
        setTimeout(() => {
          setMovies(moviesData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setMovies([]); // Asegura que movies es un array vacío en caso de error
      }
    };

    fetchMovies();
  }, []);

  const searchMovies = (query) => {
    if (!query) return [];
    return movies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      (movie.director && movie.director.toLowerCase().includes(query.toLowerCase())) ||
      (movie.synopsis && movie.synopsis.toLowerCase().includes(query.toLowerCase())) ||
      (movie.actors && movie.actors.some(actor => actor.toLowerCase().includes(query.toLowerCase())))
    );
  };

  return { movies, loading, error, searchMovies };
}

export default useMovies;