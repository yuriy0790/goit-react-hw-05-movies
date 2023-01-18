import PropTypes from 'prop-types';

import { Section, InfoWrap } from './MovieInfo.Styled';

const MovieInfo = ({
  movieInfo: { poster_path, title, release_date, genres, overview, userScore },
}) => (
  <Section>
    <img src={poster_path} width="320" alt={title}></img>
    <InfoWrap>
      <h2>
        {title} ({release_date})
      </h2>
      <p>{userScore}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </InfoWrap>
  </Section>
);
export default MovieInfo;

MovieInfo.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.number,
    genres: PropTypes.string,
    overview: PropTypes.string,
    userScore: PropTypes.string,
  }).isRequired,
};
