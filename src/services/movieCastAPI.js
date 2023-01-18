import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '87582cb7f63615fc9dcd406a264f6674';

const movieCastAPI = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${URL}/${id}/credits?${searchParams}`);

  return data;
};

export default movieCastAPI;
