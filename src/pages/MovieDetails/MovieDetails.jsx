import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import MovieInfo from 'components/MovieInfo/MovieInfo';
import movieDetailsAPI from 'services/movieDetailsAPI';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    movieDetailsAPI(movieId)
      .then(results => {
        console.log('movie details', results);
        setMovieInfo(results);
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
        movieInfo && <MovieInfo movieInfo={movieInfo} />
      )}
      <h2>Additional information</h2>
      <NavLink to={'cast'}>Cast</NavLink>
      <NavLink to={'reviews'}>Reviews</NavLink>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
