import Movies from "components/Movies/Movies"
import { Outlet } from "react-router-dom"

const MoviesPage = () => {
  
  return ( 
    <div>
      <Movies />
      <Outlet />
    </div>
  )
}
export default MoviesPage