import { useState, useEffect } from 'react';
import { getTrends } from 'components/services/filmApi';
import { useLocation } from 'react-router-dom';
import { Title, List, Item, Link } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrends().then(setTrends);
  }, []);

  if (!trends) {
    return;
  }

  return (
    <div>
      <Title>Trending today</Title>
      <List>
        {trends.map(({ id, title }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
export default Home;
