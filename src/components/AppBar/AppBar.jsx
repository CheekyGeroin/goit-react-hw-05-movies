import { Container, List, Item, Link } from './AppBar.styled';

const AppBar = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <Container>
      <List>
        {navItems.map(({ href, text }) => {
          return (
            <Item>
              <Link to={href} key={href}>
                {text}
              </Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default AppBar;
