import styled from 'styled-components';

export const List = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled('li')`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
  gap: 5px;
  max-width: 90%;
  min-width: 250px;
  border: 2px solid #8c46a3;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  color: #a126b2;
  background-color: #ffd0f420;
  border-color: #8c46a37e;
`;
