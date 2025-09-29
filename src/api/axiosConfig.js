import Axios from 'axios';

// Création d'une instance Axios
const axiosInstance = Axios.create({
    baseURL: 'https://concertslives.store/api', // base URL de ton API
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Ajouter un intercepteur pour injecter le token JWT dans chaque requête
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
