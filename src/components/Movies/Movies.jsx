import { useState, useEffect } from 'react';
import { useFirstMountState } from 'react-use';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Films from 'components/Movies/Films/Films';
import { SearchBar } from 'components/Movies/SearchBar/SearchBar';
import { searchMovies } from 'components/services/filmApi';
import {  useSearchParams } from 'react-router-dom';
import Films from './Films/Films';

const Movies = () => {
  const [filmName, setFilmName] = useState('');
  const [filmList, setFilmList] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const isFirstRender = useFirstMountState();
  const foundedFilms = filmList

  const getFilmName = name => {
    if (name.trim() === '') {
      return toast.error(`Please write name of film`);
    }
    setFilmName(name);
  };

  const updQueryString = query => {
    const nextParam = query !== '' ? { query } : {};
    setSearchParam(nextParam);
  };

  useEffect(() => {
    if (!isFirstRender) {
      searchMovies(filmName).then(setFilmList);
    }
  }, [filmName, isFirstRender]);

  if (!filmList) {
    return;
  }

  return (
    <div>
      <SearchBar onSubmit={getFilmName} onChange={updQueryString} />
      <Films list={foundedFilms} />
    </div>
  );
};

export default Movies;
