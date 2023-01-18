import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';

import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';
// import trendingMoviesAPI from 'services/trendingMoviesAPI';
import { trendingMoviesAPI } from 'services/movieDataAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    trendingMoviesAPI()
      .then(({ results }) => {
        if (!results.length) {
          Notiflix.Notify.failure('Oops, list is empty...');
          return;
        }
        setTrendingMovies(results);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <h2>Popular today</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <TrendingMoviesList trendingMovies={trendingMovies} />
      )}
    </main>
  );
};

export default Home;
