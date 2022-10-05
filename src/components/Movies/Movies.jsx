import { useState, useEffect } from 'react';
import { useFirstMountState } from 'react-use';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Films  from 'components/Movies/Films/Films';
import { SearchBar } from 'components/Movies/SearchBar/SearchBar';
import { searchMovies } from 'components/services/filmApi';

 const Movies = () => {
     const [filmName, setFilmName] = useState('');
     const [filmList, setFilmList] = useState([]);
     const isFirstRender = useFirstMountState();


     const getFilmName = name => {
         if (name.trim() === '') {
             return toast.error(`Please write name of film`)
         }
         setFilmName(name)
     }

     useEffect(() => {
         if (!isFirstRender) {
             searchMovies(filmName).then(setFilmList)
         }
     }, [filmName, isFirstRender])

     return (
         <div>
             <SearchBar onSubmit={getFilmName} />
             <Films list={filmList} />
         </div>
     )
};

export default Movies