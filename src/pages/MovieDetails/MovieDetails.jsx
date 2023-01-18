import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import movieDetailsAPI from 'services/movieDetailsAPI';

const LinkItem = styled(NavLink)`
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

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  console.log(location);

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
      <Link to={location.state.from}>GO BACK</Link>
      {isLoading ? (
        <Loader />
      ) : (
        movieInfo && <MovieInfo movieInfo={movieInfo} />
      )}
      <h2>Additional information</h2>
      <LinkItem to={'cast'}>Cast</LinkItem>
      <LinkItem to={'reviews'}>Reviews</LinkItem>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
