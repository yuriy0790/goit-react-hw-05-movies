import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LinkItem = styled(Link)`
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  flex-basis: 49%;
  min-width: 250px;
  border: 2px solid #8c46a3;
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  color: #75367d;

  &.active {
    background-color: blue;
    color: #ffffff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ca3fdd;
    background-color: #ffd0f448;
    border-color: #8c46a37e;
    transform: scale(1.02);
  }
`;
