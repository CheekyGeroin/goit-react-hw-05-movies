import FilmItem from '../FilmItem/FilmItem';
import PropTypes from 'prop-types';
import { List } from './Films.styled';

const Films = ({ list }) => {
  return (
    <List>
      {list.length > 0 &&
        list.map(({ id, title }) => {
          return <FilmItem key={id} id={id} title={title} />;
        })}
    </List>
  );
};
export default Films;

Films.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
