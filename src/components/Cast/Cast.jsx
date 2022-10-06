import { getMovieCast } from 'components/services/filmApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const URL= 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img src={`${URL}${profile_path}`} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
