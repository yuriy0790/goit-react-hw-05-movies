import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';

import Loader from 'components/Loader/Loader';
import movieCastAPI from 'services/movieCastAPI';

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
          <ul>
            {castInfo.map(({ profile_path, character, name, id }) => (
              <li key={id}>
                <img src={profile_path} width="154px" alt={name}></img>
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </main>
  );
};

export default Cast;
