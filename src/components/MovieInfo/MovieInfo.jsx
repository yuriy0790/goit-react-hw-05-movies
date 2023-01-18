import PropTypes from 'prop-types';
// import styles from './ImageGallery.module.css';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Section = styled('section')`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const InfoWrap = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 320px;
  max-width: 60%;
  gap: 20px;
`;

// const List = styled('ul')`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

// const LinkItem = styled(Link)`
//   display: flex;
//   gap: 5px;
//   flex-wrap: nowrap;
//   flex-basis: 49%;
//   min-width: 250px;
//   border: 2px solid #8c46a3;
//   border-radius: 4px;
//   text-decoration: none;
//   font-size: 20px;
//   color: #75367d;

//   &.active {
//     background-color: blue;
//     color: #ffffff;
//   }

//   :hover:not(.active),
//   :focus-visible:not(.active) {
//     color: #ca3fdd;
//     background-color: #ffd0f448;
//     border-color: #8c46a37e;
//     transform: scale(1.02);
//   }
// `;

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
