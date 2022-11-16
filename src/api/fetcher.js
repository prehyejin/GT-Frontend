import axios from 'axios';

const DEFAULT_URL = 'http://localhost:3001';

const request = axios.create({
    baseURL: DEFAULT_URL,
});

request.defaults.timeout = 4000;

export default request;