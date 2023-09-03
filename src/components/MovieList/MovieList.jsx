import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MoviesListItems = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.trendingMovieList}>
      {movies?.map(movie => (
        <li className={css.trendingMovieItem} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <Card sx={{ width: 200 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                title={movie.title}
              />
              <CardContent sx={{ height: 30 }}>
                <Typography sx={{ fontSize: 14 }} component="div">
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
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
