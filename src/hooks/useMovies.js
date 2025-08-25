import { useState, useEffect } from 'react';
import moviesData from '../data/movies';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const ELASTICSEARCH_ENABLED = process.env.REACT_APP_ELASTICSEARCH_ENABLED === 'true';

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para transformar respuesta de Elasticsearch
  const transformElasticsearchResponse = (data) => {
    if (data.hits && Array.isArray(data.hits.hits)) {
      return data.hits.hits.map(hit => ({
        id: hit._id,
        ...hit._source,
        actors: hit._source.actors || [],
        genres: hit._source.genres || [],
        year: parseInt(hit._source.year) || 0,
        duration: parseInt(hit._source.duration) || 0,
        price: parseFloat(hit._source.price) || 0,
        rentalPrice: parseFloat(hit._source.rentalPrice) || 0,
        imageUrl: hit._source.imageUrl || '/images/placeholder.jpg'
      }));
    }
    return data;
  };

  // Función principal para cargar películas
  const fetchMovies = async () => {
    try {
      console.log('🔄 Fetching from:', `${API_BASE_URL}/api/movies`);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(`${API_BASE_URL}/api/movies`, {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ API response:', data);
      
      const transformedMovies = ELASTICSEARCH_ENABLED 
        ? transformElasticsearchResponse(data)
        : data;
      
      return transformedMovies;
    } catch (err) {
      console.warn('❌ API failed, using mock data:', err.message);
      return moviesData; // Fallback a datos mock
    }
  };

  // useEffect para cargar películas al iniciar
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
        setError(null);
      } catch (err) {
        console.error('❌ Error loading movies:', err);
        setError('Error loading movies');
        setMovies(moviesData);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  // Función de búsqueda
  const searchMovies = async (query) => {
    if (!query.trim()) return movies;

    try {
      const endpoint = ELASTICSEARCH_ENABLED 
        ? `${API_BASE_URL}/api/movies/search?q=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/api/movies?q=${encodeURIComponent(query)}`;

      const response = await fetch(endpoint);
      
      if (!response.ok) throw new Error('Search failed');
      
      const data = await response.json();
      
      return ELASTICSEARCH_ENABLED 
        ? transformElasticsearchResponse(data)
        : data;
        
    } catch (err) {
      console.error('❌ Search error, using local filter:', err);
      return movies.filter(movie => 
        movie.title?.toLowerCase().includes(query.toLowerCase()) ||
        movie.director?.toLowerCase().includes(query.toLowerCase()) ||
        movie.synopsis?.toLowerCase().includes(query.toLowerCase()) ||
        movie.actors?.some(actor => 
          actor && actor.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return { movies, loading, error, searchMovies };
}

export default useMovies;