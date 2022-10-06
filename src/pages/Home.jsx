import Home from 'components/Home/Home';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
};
export default HomePage;
