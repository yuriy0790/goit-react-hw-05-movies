import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkItem = styled(NavLink)`
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  width: 100px;
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 700;
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
    color: #8c46a3;
    border: 2px solid #8c46a3;
    transform: scale(1.03);
  }
`;
