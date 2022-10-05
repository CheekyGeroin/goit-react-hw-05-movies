import FilmItem from '../FilmItem/FilmItem';
import PropTypes from 'prop-types';

 const Films = ({list}) => {
    
    return (
        <ul>
            {list.length > 0 &&
                list.map(({ id, title }) => {
                return <FilmItem key={id} id={id} title={title} />
            })}
        </ul>
    )
}
export default Films

Films.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
        })
    ),
}