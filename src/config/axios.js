import { config } from './index';
import axios from 'axios';

const baseURL = config.BASE_URL;

/* new Axios instance with global default options */
export default axios.create({
    baseURL
});