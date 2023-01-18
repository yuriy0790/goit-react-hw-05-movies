import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { List, LinkItem } from './TrendingMoviesList.Styled';

const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <List>
      {trendingMovies.map(({ id, title, poster_path }) => (
        <LinkItem to={`/movies/${id}`} key={id} state={{ from: location }}>
          <img
            src={'https://image.tmdb.org/t/p/w500' + poster_path}
            width="70px"
            alt={title}
          ></img>
          <p>{title}</p>
        </LinkItem>
      ))}
    </List>
  );
};
export default TrendingMoviesList;

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
