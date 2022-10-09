import { getMovieReviews } from 'components/services/filmApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Author, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <List>
        {reviews.map(({ author, content, id }) => {
          return (
            <Item key={id}>
              <Author>Author: {author}</Author>
              <Text>{content}</Text>
            </Item>
          );
        })}
      </List>
      {reviews.length === 0 && (
        <Text>We don't have any reviews for this movie</Text>
      )}
    </div>
  );
};
export default Reviews;
