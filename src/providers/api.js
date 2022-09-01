import axios from 'axios';

const API_URL = 'https://api.punkapi.com/v2/'

axios.defaults.baseURL = API_URL

export const api = axios;