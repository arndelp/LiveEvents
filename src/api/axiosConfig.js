import Axios from 'axios';


export const apiURL = process.env.REACT_APP_API_URL;

// Création d'une instance Axios
const axiosInstance = Axios.create({
    baseURL: `${apiURL}/api`, // base URL de l' API
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
