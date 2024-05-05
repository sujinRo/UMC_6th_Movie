import axios from 'axios';

const API_KEY = '23129335d4e72895e00b227873f60824';
const API_URL = 'https://api.themoviedb.org/3/movie/';

//nowPlayingList api
export const getNowPlayingList = async () => {
  const response = await axios.get(`${API_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};
