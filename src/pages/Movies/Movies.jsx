import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import searchMoviesAPI from 'services/searchMoviesAPI';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    setIsLoading(true);
    searchMoviesAPI(query)
      .then(({ results }) => {
        if (!results.length) {
          Notiflix.Notify.failure('There is no results');
          return;
        }
        setFoundMovies(results);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const formSubmitHandler = searchQuery => {
    setSearchParams({ query: searchQuery });
    setFoundMovies([]);
  };

  return (
    <main>
      <SearchBar onSubmit={formSubmitHandler} />
      {isLoading ? (
        <Loader />
      ) : (
        <TrendingMoviesList trendingMovies={foundMovies} />
      )}
    </main>
  );
};

export default Movies;
