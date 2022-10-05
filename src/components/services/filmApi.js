import axios from 'axios';

const KEY = '4f759a8f2a3c2252d280f73946c6d093';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const searchMovies = async searchQuery => {
  const url = `/search/movie`;
  const urlParams = {
    api_key: KEY,
    query: searchQuery,
  };

  try {
    const res = await axios.get(url, { params: urlParams });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTrends = async () => {
  const url = `/trending/movie/day`;
  const urlParams = {
    api_key: KEY,
  };

  try {
    const res = await axios.get(url, { params: urlParams });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  const url = `/movie/${movieId}`;
  const urlParams = {
    api_key: KEY,
  };

  try {
    const res = await axios.get(url, { params: urlParams });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async movieId => {
  const url = `/movie/${movieId}/credits`;
  const urlParams = {
    api_key: KEY,
  };

  try {
    const res = await axios.get(url, { params: urlParams });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  const url = `/movie/${movieId}/reviews`;
  const urlParams = {
    api_key: KEY,
  };

  try {
    const res = await axios.get(url, { params: urlParams });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
