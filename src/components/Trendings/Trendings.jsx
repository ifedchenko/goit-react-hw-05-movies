import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import fetchTrendings from 'services/fetchTrendings';
import MovieList from 'components/MovieList/MovieList';
import css from './Trendings.module.css';

const Trendings = () => {
  const [movies, setMovies] = useState([]);
  const [isLoaderShown, setIsLoaderShown] = useState(true);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const result = await fetchTrendings();
        setMovies(result.results);
        setIsLoaderShown(false);
      } catch (error) {
        setIsLoaderShown(false);
        console.log(error);
      }
    }

    fetchTrendMovies();
  }, []);

  return (
    <div className={css.trendings}>
      <h1>Trendings today</h1>
      {isLoaderShown && (
        <div className={css.trendingsLoader}>
          <CircularProgress />
        </div>
      )}
      {!isLoaderShown && (
        <div>
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
};

export default Trendings;
