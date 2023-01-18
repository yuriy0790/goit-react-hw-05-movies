import axios from 'axios';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '87582cb7f63615fc9dcd406a264f6674';

export const movieDetailsAPI = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${URL}/${id}?${searchParams}`);

  return data;
};

export const movieCastAPI = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${URL}/${id}/credits?${searchParams}`);

  return data;
};

export const movieReviewsAPI = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${URL}/${id}/reviews?${searchParams}`);

  return data;
};

export const searchMoviesAPI = async query => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    include_adult: false,
    query: query,
  });
  const { data } = await axios.get(`${SEARCH_URL}?${searchParams}`);

  return data;
};

export const trendingMoviesAPI = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    include_adult: false,
  });
  const { data } = await axios.get(`${TRENDING_URL}?${searchParams}`);

  return data;
};
