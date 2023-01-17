import PropTypes from 'prop-types';
// import styles from './ImageGallery.module.css';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const LinkItem = styled(Link)`
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  flex-basis: 49%;
  min-width: 250px;
  border: 2px solid #8c46a3;
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  color: #75367d;

  &.active {
    background-color: blue;
    color: #ffffff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ca3fdd;
    background-color: #ffd0f448;
    border-color: #8c46a37e;
    transform: scale(1.02);
  }
`;

const MovieInfo = ({ movieInfo: { poster_path, title } }) => (
  <div>
    <img
      src={'https://image.tmdb.org/t/p/w500' + poster_path}
      width="200"
      alt={title}
    ></img>
    <p>{title}</p>
  </div>
);
export default MovieInfo;

MovieInfo.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
