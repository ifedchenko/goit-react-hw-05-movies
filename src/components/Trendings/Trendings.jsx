import { useEffect, useState } from 'react';
import fetchTrendings from 'services/fetchTrendings';
import MovieList from 'components/MovieList/MovieList';
import css from './Trendings.module.css';

const Trendings = () => {
  const [movies, setMovies] = useState([]);
  const [isLoaderShown, setIsLoaderShown] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        setIsLoaderShown(true);
        const result = await fetchTrendings();
        setMovies(result.results);
        setIsLoaderShown(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <div className={css.trendings}>
      <h1>Trendings today</h1>
      {isLoaderShown && 'Loading ...'}
      <MovieList movies={movies} />
    </div>
  );
};

export default Trendings;
