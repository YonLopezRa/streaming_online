import React from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieCard from '../components/MovieCard';
import useMovies from '../hooks/useMovies';
import '../styles/main.css';

function Home() {
  const { movies, loading, error } = useMovies();
  const featuredMovies = movies.slice(0, 5); // Mostrar solo 5 películas destacadas

  return (
    <div className="home">
      <HeroBanner />
      
      <section className="featured-movies">
        <h2>Películas destacadas</h2>
        
        {loading && <div className="loading">Cargando películas destacadas...</div>}
        {error && <div className="error">Error al cargar películas: {error}</div>}
        
        <div className="movies-grid">
          {featuredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      
      <section className="call-to-action">
        <h3>¿Listo para descubrir más?</h3>
        <a href="/catalog" className="button button--primary">
          Ver catálogo completo
        </a>
      </section>
    </div>
  );
}

export default Home;