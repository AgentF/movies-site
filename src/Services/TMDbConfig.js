import axios from 'axios';

const TMDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const image = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/',
});

/*
  https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
  {base_url}/{size}/{file_path}
*/

export { TMDb, image };
