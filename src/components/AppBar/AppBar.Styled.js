import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled('nav')`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #8652ee, #e73c7e, #e981ed, #9123d5);
  background-size: 200% 200%;
`;

export const NavItem = styled(NavLink)`
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
