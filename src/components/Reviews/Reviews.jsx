import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loader from 'components/Loader/Loader';
import movieReviewsAPI from 'services/movieReviewsAPI';

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled('li')`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
  gap: 5px;
  max-width: 90%;
  min-width: 250px;
  border: 2px solid #8c46a3;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  color: #a126b2;
  background-color: #ffd0f420;
  border-color: #8c46a37e;
`;

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    movieReviewsAPI(movieId)
      .then(({ results }) => {
        setReviewsInfo(results);
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
      ) : (reviewsInfo && reviewsInfo.length) > 0 ? (
        <List>
          {reviewsInfo.map(({ author, content, id }) => (
            <ListItem key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>We don't have any reviews for this movie yet</p>
      )}
    </main>
  );
};

export default Reviews;
