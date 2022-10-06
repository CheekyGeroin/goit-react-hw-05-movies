import HomePage from 'pages/Home';
import MovieDetailsPage from 'pages/MovieDetails';
import MoviesPage from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cast from './Cast/Cast';
import Layout from './Layout/Layout';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
