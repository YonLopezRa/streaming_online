import React from 'react';
import collageImage from '../images/movies.jpg';
import '../styles/components.css';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Disfruta del mejor cine en casa</h1>
        <p className="hero-banner__subtitle">Miles de películas a un clic de distancia</p>
        <a href="/catalog" className="hero-banner__button">Explorar catálogo</a>
      </div>
    </div>
  );
}

export default HeroBanner;