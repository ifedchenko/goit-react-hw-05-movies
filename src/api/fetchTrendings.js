import axios from 'axios';

const API_KEY = '77cc72e96f7fab7310e90a268c6bf448';

const fetchTrendingDayMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data);
};

export default fetchTrendingDayMovies;
