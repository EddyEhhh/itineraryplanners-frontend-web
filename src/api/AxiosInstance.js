import axios from 'axios';
// import config from '../../public/config/config.env'
//
//
// const path = require('path');
// const dotenv = require('dotenv');
//
// // Construct the path to the .env file in the config directory
// const envPath = path.resolve(__dirname, 'config', 'config.env');
//
// // Load the environment variables from the specified .env file
// dotenv.config({ path: envPath });
//
// const baseURL = process.env.APPLICATION_API_BASEURL;

const config = require('../config/config.json');
const baseURL =  config.applicationApiBaseUrl;
//
// const baseURL = process.env.ipApplicationApiBaseUrl;
// console.log("URL: " + baseURL)

export default axios.create({
    // baseURL: 'http://54.169.136.171:8080',art
    // baseURL: 'http://localhost:8080',
    baseURL: baseURL,
    withCredentials: true

});
