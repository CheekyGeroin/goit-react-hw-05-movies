import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
const FilmItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`${id}`}>{title}</Link>
      <Outlet />
    </li>
  );
};
export default FilmItem;

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
