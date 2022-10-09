import { getMovieDetails } from 'components/services/filmApi';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import noimage_url from '../../images/noimage.png';
import {
  Link,
  Button,
  InfoContainer,
  ImageContainer,
  Image,
  Container,
  Title,
  UserScore,
  Overview,
  Text,
  GenresTitle,
  GenresList,
  GenresItem,
  AdditionalContainer,
  AdditionalTitle,
  AdditionalItem,
  AdditionalList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const URL = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const backHrefLink = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, poster_path, vote_average, overview, genres } = movie;
  const userScore = Math.ceil(vote_average * 10);

  return (
    <div>
      <Button>
        <Link to={backHrefLink}>
          <BiArrowBack />
          Go back
        </Link>
      </Button>
      <InfoContainer>
        <ImageContainer>
          <Image
            src={poster_path ? `${URL}${poster_path}` : noimage_url}
            alt={title}
          />
        </ImageContainer>
        <Container>
          <div>
            <Title>{title}</Title>
          </div>
          <div>
            <UserScore>User score: {userScore}%</UserScore>
          </div>
          <div>
            <Overview>Overview</Overview>
            <Text>{overview}</Text>
          </div>
          <div>
            <GenresTitle>Genres</GenresTitle>
            <GenresList>
              {genres.map(({ id, name }) => {
                return <GenresItem key={id}>{name}</GenresItem>;
              })}
            </GenresList>
          </div>
        </Container>
      </InfoContainer>
      <AdditionalContainer>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalList>
          <AdditionalItem>
            <Link to="cast">Cast</Link>
          </AdditionalItem>
          <AdditionalItem>
            <Link to="reviews">Reviews</Link>
          </AdditionalItem>
        </AdditionalList>
      </AdditionalContainer>
    </div>
  );
};

export default MovieDetails;
