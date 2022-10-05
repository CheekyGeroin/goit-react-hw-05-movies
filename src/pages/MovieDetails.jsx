import MovieDetails from "components/MovieDetails/MovieDetails"
import { Outlet } from "react-router-dom"

const MovieDetailsPage = () => {
    
    return (
        <div>
            <MovieDetails />
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage