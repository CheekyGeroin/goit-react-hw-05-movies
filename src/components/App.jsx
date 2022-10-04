import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element />
        <Route path="*" element />
      </Routes>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
