import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import fetchSearchMovies from 'services/fetchSearchMovies';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [isLoaderShown, setIsLoaderShown] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest || searchParams === null) return;

    async function fetchMovies() {
      try {
        setIsLoaderShown(true);
        const data = await fetchSearchMovies(searchRequest);
        if (!data.results.length) {
          error('No movies found!');
        }
        setMovies(data.results);
      } catch (error) {
        setError('Ooops. Something went wrong...');
        console.log(error);
      } finally {
        setIsLoaderShown(false);
      }
    }

    fetchMovies();
  }, [searchRequest]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <div className="moviesPage">
      <h1>Movies search</h1>
      {isLoaderShown && !error && 'Loading ...'}
      {error && <div>{error}</div>}
      <SearchBar onSubmit={onSubmit} />
      {movies && <MovieList movies={movies} prevLocation={location} />}
    </div>
  );
};

export default Movies;
