import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';

import { ListItem, List } from './Reviews.Styled';

import Loader from 'components/Loader/Loader';
// import movieReviewsAPI from 'services/movieReviewsAPI';
import { movieReviewsAPI } from 'services/movieDataAPI';

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
