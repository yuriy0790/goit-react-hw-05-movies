import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi';

const navItems = [
  { href: '/', text: 'Home', icon: BiCameraMovie },
  { href: 'movies', text: 'Movies', icon: BiSearchAlt },
];

const Nav = styled('nav')`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #8652ee, #e73c7e, #e981ed, #9123d5);
  background-size: 200% 200%;
`;

const NavItem = styled(NavLink)`
  height: 40px;
  min-width: 150px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;
  background-color: transparent;
  border: 1px solid #8c46a3;
  &.active {
    background-color: #b161f7;
    border: 2px solid #8c46a3;
    color: #ffffff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ffffff;
    border: 2px solid #8c46a3;
    transform: scale(1.03);
  }
`;

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
