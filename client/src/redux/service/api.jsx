import axios from "axios";
import {getTokens, setAuthToken, setRefreshToken} from "../tokens/tokens";

export const api = axios.create({
    baseURL: 'https://twitter-clone-application.herokuapp.com/api/v1'
});

api.interceptors.response.use((r) => r.data,
    async function (error) {
        const {refreshToken} = getTokens();
        const originalRequest = error.config;

        if (originalRequest._retry) {
            setAuthToken();
            setRefreshToken();
        } else if (error.response.status === 401) {
            originalRequest._retry = true;

            return await axios
                .get('/api/v1/auth/refresh', {
                    headers: {
                        'Refresh-token': refreshToken
                    }
                })
                .then(({data}) => {
                    setAuthToken(data.token);
                    setRefreshToken(data.refreshToken);
                    originalRequest.headers.Authorization = data.token;
                    return api(originalRequest);
                })
                .catch(err => {
                    setAuthToken();
                    setRefreshToken();
                    return Promise.reject(error);
                });
        }

        return Promise.reject(error);
    });