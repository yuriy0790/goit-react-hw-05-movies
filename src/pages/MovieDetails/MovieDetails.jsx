import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';

import { LinkItem } from './MovieDetails.Styled';

import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
// import movieDetailsAPI from 'services/movieDetailsAPI';
import { movieDetailsAPI } from 'services/movieDataAPI';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    movieDetailsAPI(movieId)
      .then(
        ({
          poster_path,
          id,
          title,
          release_date,
          genres,
          overview,
          vote_average,
        }) => {
          const processedMovieInfo = () => ({
            id,
            title,
            release_date: new Date(release_date).getFullYear(),
            genres: genres.map(genre => genre.name).join(' '),
            overview,
            userScore: `User score: ${Math.round(vote_average * 10)}%`,
            poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
          });
          setMovieInfo(processedMovieInfo);
        }
      )
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <main>
      <Link to={location.state?.from ?? '/'}>
        <RiArrowGoBackFill size="20" />
        GO BACK
      </Link>
      {isLoading ? (
        <Loader />
      ) : (
        movieInfo && <MovieInfo movieInfo={movieInfo} />
      )}
      <h2>Additional information</h2>
      <LinkItem to={'cast'} state={{ from: location.state?.from ?? '/' }}>
        Cast
      </LinkItem>
      <LinkItem to={'reviews'} state={{ from: location.state?.from ?? '/' }}>
        Reviews
      </LinkItem>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
