import { useState, useEffect } from 'react';
import { useFirstMountState } from 'react-use';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilmList } from 'components/FilmList/FilmList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { searchMovies } from 'components/services/filmApi';

export const Movies = () => {
    const [filmName, setFilmName] = useState('');
    const [filmList, setFilmList] = useState([])
    const isFirstRender = useFirstMountState();

    useEffect(() => {
        if (!isFirstRender) {
            searchMovies(filmName).then(setFilmList)
        }
    }, [filmName, isFirstRender])

  const getFilmName = title => {
    if (title.trim() === '') {
      return toast.error(`Please write name of film`);
    }

    setFilmName(title);
    };
    
    
    if (!filmList) {
        return
    }

  return (
    <div>
      <SearchBar onSubmit={getFilmName} />
      <FilmList  list={filmList} />
    </div>
  );
};
