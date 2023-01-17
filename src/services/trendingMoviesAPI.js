import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = '87582cb7f63615fc9dcd406a264f6674';

const trendingMoviesAPI = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    include_adult: false,
  });
  const { data } = await axios.get(`${URL}?${searchParams}`);

  return data;
};

export default trendingMoviesAPI;
