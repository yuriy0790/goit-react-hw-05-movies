import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loader from 'components/Loader/Loader';
import movieCastAPI from 'services/movieCastAPI';

const List = styled('ul')`
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
`;

const ListItem = styled('li')`
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

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [castInfo, setCastInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    movieCastAPI(movieId)
      .then(results => {
        console.log('cast :', results.cast);
        const processedCast = results.cast.map(
          ({ profile_path, character, name, id }) => ({
            id,
            name,
            character,
            profile_path: `http://image.tmdb.org/t/p/w342${profile_path}`,
          })
        );
        console.log('processedCast :', processedCast);
        setCastInfo(processedCast);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        castInfo && (
          <List>
            {castInfo.map(({ profile_path, character, name, id }) => (
              <ListItem key={id}>
                <img src={profile_path} width="154px" alt={name}></img>
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </ListItem>
            ))}
          </List>
        )
      )}
    </main>
  );
};

export default Cast;
