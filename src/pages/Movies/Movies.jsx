import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';

import searchMoviesAPI from 'services/searchMoviesAPI';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    searchMoviesAPI(query)
      .then(({ results }) => {
        console.log('searchresults', results);
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
  }, [query]);

  const formSubmitHandler = searchQuery => {
    setQuery(searchQuery);
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
