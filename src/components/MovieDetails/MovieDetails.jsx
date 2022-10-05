import { getMovieDetails } from "components/services/filmApi"
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom"
import { BiArrowBack } from 'react-icons/bi'

 
const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([]);
    useEffect(() => {
             getMovieDetails(movieId).then(setMovie)
    }, [movieId])
    
    console.log(movie)
    if (!movie) {
       return
    }
    
    const { title, poster_path, vote_average, overview, genres } = movie;

    console.log(genres)
    return (
        <div>
            <div>
            <button>
                 <BiArrowBack />
                Go back</button>
        </div>
        <div>
             <img src={poster_path} alt={title} />   
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>User score: {vote_average}/10</p>
            </div>
            <div>
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
            <div>
                <h2>Genres</h2>
                <ul>
                    {genres.map(({ id,name }) => {
                        return <li key={id}>{name}</li>
                })}
                </ul>
            </div>
        </div>
    )
}

export default MovieDetails