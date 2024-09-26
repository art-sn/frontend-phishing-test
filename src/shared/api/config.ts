import axios from 'axios';
import {RoutesNames} from "../../app/router/Router";

const config = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const accessTokenKey = 'accessToken'
config.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(accessTokenKey);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



config.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem(accessTokenKey);
            window.location.href = RoutesNames.LOG_IN;
        }
        return Promise.reject(error);
    }
);

export default config;