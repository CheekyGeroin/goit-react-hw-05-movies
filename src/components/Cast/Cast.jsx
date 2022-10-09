import { getMovieCast } from 'components/services/filmApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noimage_url from '../../images/noimage.png';
import { List, Item, Image, Title, Character } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <List>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <Item key={id}>
              <Image
                src={profile_path ? `${URL}${profile_path}` : noimage_url}
                alt={name}
              />
              <Title>{name}</Title>
              <Character>Character: {character}</Character>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
export default Cast;
