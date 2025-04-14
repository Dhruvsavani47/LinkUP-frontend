import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://linkup-backend-ahn9.onrender.com',
    // timeout: 5000,
})

export default instance;