import React, { useEffect, useState, Suspense } from 'react';
import Button from '@mui/material/Button';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './MovieDetails.module.css';
import img from 'images/image-not-found.jpeg';
import fetchMovieDetails from 'services/fetchMovieDetails';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaderShown, setIsLoaderShown] = useState(false);

  const getYear = () =>
    movie ? new Date(movie.release_date).getFullYear() : null;

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setIsLoaderShown(true);
    fetchMovieDetails(movieId)
      .then(result => {
        setMovie(result);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
        console.log(error);
      })
      .finally(() => setIsLoaderShown(false));
  }, [movieId]);

  const displayErrorMessage = () => {
    if (error) {
      return <div>{error}</div>;
    }
    return null;
  };

  return (
    <div className={css.movieDetails}>
      <Button
        variant="outlined"
        onClick={handleClick}
        size="large"
        sx={{ marginTop: 2.5, marginBottom: 2.5 }}
      >
        Go back
      </Button>
      {/* <button onClick={handleClick} className={css.backButton}>
        Go back
      </button> */}
      {isLoaderShown && <div>Loading ...</div>}
      {displayErrorMessage()}
      {movie && (
        <div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <img src={img} width="200" alt="File not found" />
          )}
          <h3>{movie.title}</h3>
          <p>({getYear()})</p>
          <p>User Score: {Math.round(movie.popularity)}%</p>
          <div className={css.movieOverview}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      {movie && (
        <>
          <hr />
          <div className={css.links}>
            <NavLink
              className={css.link}
              to={`/movies/${movieId}/reviews`}
              style={isActive => (isActive ? { color: '#0C2E56' } : undefined)}
              state={location.state}
            >
              <p className={css.reviews}>Reviews</p>
            </NavLink>

            <NavLink
              className={css.link}
              to={`/movies/${movieId}/cast`}
              style={isActive => (isActive ? { color: '#0C2E56' } : undefined)}
              state={location.state}
            >
              <p className={css.cast}>Cast</p>
            </NavLink>
            <hr />
          </div>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
