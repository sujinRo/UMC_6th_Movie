import axios from 'axios';

const API_KEY = '23129335d4e72895e00b227873f60824';
const API_URL = 'https://api.themoviedb.org/3/movie/';

//nowPlayingList api
export const getNowPlayingList = async () => {
  const response = await axios.get(`${API_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

//popularList api
export const getPopularList = async () => {
  const response = await axios.get(`${API_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

//topRatedList api
export const getTopRatedList = async () => {
  const response = await axios.get(`${API_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

//upComingList api
export const getUpComingList = async () => {
  const response = await axios.get(`${API_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};
