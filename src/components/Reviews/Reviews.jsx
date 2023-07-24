import css from './Reviews.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchReveiws from 'services/fetchReveiws';

const Cast = () => {
  const { movieId } = useParams();

  const [reviews, setreveiws] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReveiws = async () => {
      try {
        const data = await fetchReveiws(movieId);
        setreveiws(data.results);
      } catch (error) {
        setError('Oops. Something went wrong...');
      }
    };
    fetchMovieReveiws();
  }, [movieId]);

  return (
    <>
      {error && <div>{error}</div>}
      {reviews.length === 0 ? (
        <div>No reviews</div>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
