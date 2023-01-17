import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsStack } from 'react-icons/bs';

const navItems = [
  { href: '/', text: 'Home', icon: BsStack },
  { href: 'movies', text: 'Movies', icon: BsStack },
];

const NavItem = styled(NavLink)`
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;

  &.active {
    background-color: blue;
    color: #ffffff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;

const AppBar = () => {
  return (
    <nav>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem to={href} key={href}>
          <Icon size="16" />
          {text}
        </NavItem>
      ))}
    </nav>
  );
};

export default AppBar;
