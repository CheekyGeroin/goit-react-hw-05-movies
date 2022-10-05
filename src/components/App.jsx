import HomePage from 'pages/Home';
import  MovieDetailsPage  from 'pages/MovieDetails';
import MoviesPage from 'pages/MoviesPage';
import { Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:movieId' element={<MovieDetailsPage />} />
      </Route>
    </Routes>
    <ToastContainer autoClose={3000} />
    </div>
  ) ;
};
