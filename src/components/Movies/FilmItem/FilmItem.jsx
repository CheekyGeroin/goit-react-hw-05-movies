import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { Link, Item } from './FilmItem.styled';

const FilmItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`${id}`} state={{ from: location }}>
        {title}
      </Link>
      <Outlet />
    </Item>
  );
};
export default FilmItem;

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
