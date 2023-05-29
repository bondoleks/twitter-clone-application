import {api} from "../service/api";

export const getTokens = () => {
    return {
        accessToken: localStorage.getItem('authToken'),
        refreshToken: localStorage.getItem('refreshToken')
    };
};

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common.Authorization = `Bearer_${token}`;
        localStorage.setItem('authToken', token);
    } else {
        delete api.defaults.headers.common.Authorization;
        localStorage.removeItem('authToken');
    }
};

export const setRefreshToken = (token) => {
    if (token) {
        localStorage.setItem('refreshToken', token);
    } else {
        localStorage.removeItem('refreshToken');
    }
};