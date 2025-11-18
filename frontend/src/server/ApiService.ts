import axios from "axios";

const API = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api',
    baseURL: 'https://outgamble-backend.setionugraha.my.id/api',
})

export default API