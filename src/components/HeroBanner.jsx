import React from 'react';
import '../styles/components.css';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Disfruta del mejor cine en casa</h1>
        <p className="hero-banner__subtitle">Miles de películas a un clic de distancia</p>
        <button className="hero-banner__button">Explorar catálogo</button>
      </div>
    </div>
  );
}

export default HeroBanner;