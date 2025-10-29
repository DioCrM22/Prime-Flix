import axios from 'axios';

//Base da URL:https://api.themoviedb.org/3/
//URLDA API: /movie/now_playing?api_key=e42927b0097dec5ab37664bf19721ab9&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;