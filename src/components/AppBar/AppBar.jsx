import { Link } from 'react-router-dom';

const AppBar = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <div>
      {navItems.map(({ href, text }) => {
        return (
          <Link to={href} key={href}>
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default AppBar;
