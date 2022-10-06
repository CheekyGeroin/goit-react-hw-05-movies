import { useState, useEffect } from 'react';
import { getTrends } from 'components/services/filmApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrends().then(setTrends);
  }, []);

  if (!trends) {
    return;
  }

  return (
    <ul>
      {trends.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Home;
