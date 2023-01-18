import styled from 'styled-components';

export const List = styled('ul')`
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
`;

export const ListItem = styled('li')`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  max-width: 154px;
  border: 2px solid #8c46a3;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: #75367d;

  &.active {
    background-color: blue;
    color: #ffffff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ca3fdd;
    background-color: #ffd0f4;
    border-color: #8c46a37e;
    transition: transform 0.5s ease-out;
    transform: scale(1.5);
  }
`;
