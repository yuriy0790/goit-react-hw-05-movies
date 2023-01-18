import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';

import { ListItem, List } from './Cast.Styled';

import Loader from 'components/Loader/Loader';
import movieCastAPI from 'services/movieCastAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    movieCastAPI(movieId)
      .then(results => {
        const processedCast = results.cast.map(
          ({ profile_path, character, name, id }) => ({
            id,
            name,
            character,
            profile_path: `http://image.tmdb.org/t/p/w342${profile_path}`,
          })
        );
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
