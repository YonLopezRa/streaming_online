import { Link } from 'react-router-dom';
import '../styles/components.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">StreamFlix</Link>
      </div>
      <div className="navbar__links">
        <Link to="/catalog" className="navbar__link">Catálogo</Link>
        <Link to="/rentals" className="navbar__link">Mis alquileres</Link>
        <Link to="/purchases" className="navbar__link">Mis compras</Link>
      </div>
    </nav>
  );
}

export default Navbar;