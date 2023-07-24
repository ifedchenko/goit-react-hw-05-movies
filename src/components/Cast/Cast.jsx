import css from './Cast.module.css';
import img from 'images/image-not-found.jpeg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCast from 'services/fetchCast';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaderShown, setIsLoaderShown] = useState(false);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setIsLoaderShown(true);
        const res = await fetchCast(movieId);
        setCast(res.cast);
      } catch (error) {
        setError('Oops. Something went wrong...');
      } finally {
        setIsLoaderShown(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {isLoaderShown && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul className={css.castList}>
        {cast.map(castItem => (
          <li key={castItem.id} className={css.castItem}>
            {castItem.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
              />
            ) : (
              <img src={img} width="200" height="300" alt="File not found" />
            )}
            <div>
              <p>{castItem.name}</p>
              <p>{castItem.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
