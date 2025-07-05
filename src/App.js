import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Movie from './pages/Movie';
import Rentals from './pages/Rentals';
import Purchases from './pages/Purchases';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/purchases" element={<Purchases />} />
              <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
