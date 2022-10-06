import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';


const FilmItem = ({ id, title }) => {
  const location = useLocation() 
  return (
    <li>
      <Link to={`${id}`} state={{from: location}}>{title}</Link>
      <Outlet />
    </li>
  );
};
export default FilmItem;

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
