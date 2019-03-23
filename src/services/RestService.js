import axios from '../config/axios';

export default class RestService {

    /* 
    / GET request - fetch data from WordPress
    */
    static get(params) {
        return axios.get(params);
    }
}