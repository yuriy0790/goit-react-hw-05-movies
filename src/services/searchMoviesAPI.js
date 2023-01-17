import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '87582cb7f63615fc9dcd406a264f6674';

const searchMoviesAPI = async query => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    include_adult: false,
    query: query,
  });
  const { data } = await axios.get(`${URL}?${searchParams}`);

  return data;
};

export default searchMoviesAPI;
