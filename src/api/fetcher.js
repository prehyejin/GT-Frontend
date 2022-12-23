import axios from 'axios';

const DEFAULT_URL = 'http://175.125.92.118:3001';

const request = axios.create({
    baseURL: DEFAULT_URL,
});

request.defaults.timeout = 4000;

export default request;