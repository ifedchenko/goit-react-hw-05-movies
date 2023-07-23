import axios from 'axios';

const API_KEY = '77cc72e96f7fab7310e90a268c6bf448';

const fetchMovieDetails = movie_id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie/${movie_id}?api_key=${API_KEY}`
    )
    .then(response => response.data);
};

export default fetchMovieDetails;
