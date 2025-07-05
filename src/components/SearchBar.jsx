import { useState } from 'react';
import '../styles/components.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value); // Búsqueda en tiempo real
        }}
        placeholder="Buscar películas..."
        className="search-bar__input"
      />
    </form>
  );
}

export default SearchBar;