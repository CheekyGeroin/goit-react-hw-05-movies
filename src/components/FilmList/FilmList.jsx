import { FilmItem } from 'components/FilmItem/FilmItem';
import PropTypes from 'prop-types';

export const FilmList = ({list}) => {
    
    return (
        <ul>
            {list.length > 0 &&
                list.map(({ id, title }) => {
                return <FilmItem key={id} title={title} />
            })}
        </ul>
    )
}

FilmList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
        })
    ),
}