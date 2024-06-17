import axios from 'axios';
import { useHistory } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 서버 주소
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // 세션이 만료된 경우 로그인 페이지로 리디렉션
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
