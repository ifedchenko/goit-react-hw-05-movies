import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MoviesListItems = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.trendingMovieList}>
      {movies?.map(movie => (
        <li className={css.trendingMovieItem} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesListItems.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesListItems;
