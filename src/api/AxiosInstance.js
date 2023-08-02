import axios from 'axios';

export default axios.create({
    // baseURL: 'http://54.169.136.171:8080',
    baseURL: 'http://localhost:8080',
    withCredentials: true

});
