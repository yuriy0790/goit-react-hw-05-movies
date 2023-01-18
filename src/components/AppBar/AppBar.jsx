import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi';

import { Nav, NavItem } from './AppBar.Styled';

const navItems = [
  { href: '/', text: 'Home', icon: BiCameraMovie },
  { href: 'movies', text: 'Movies', icon: BiSearchAlt },
];

const AppBar = () => {
  return (
    <Nav>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem to={href} key={href}>
          <Icon size="20" />
          {text}
        </NavItem>
      ))}
    </Nav>
  );
};

export default AppBar;
