import { Route, Routes, Link } from "react-router-dom";


export const App = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
          Home
        </Link>
        <Link to="/movies">
          Movies
        </Link>
      </nav>

    <Routes> 
    <Route path="/" element />
    <Route path="/movies" element/>
    <Route path="/movies/:movieId" element >
      <Route path="cast" element />
      <Route path="reviews" element/>
    </Route>
    
  </Routes>
    </div>
  )
};
