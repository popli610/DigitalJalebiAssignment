import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL ;

export const axiosinstance = axios.create({
    baseURL, headers:{'Content-Type':'application/json', Accept:'application/json',},
});