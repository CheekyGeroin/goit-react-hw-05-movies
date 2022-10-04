import PropTypes from 'prop-types';
export const FilmItem = ({ title }) => {
    return <li>
        <p>{title}</p>
    </li>
}


FilmItem.propTypes = {
    title:PropTypes.string.isRequired,
}