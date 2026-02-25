import axios from "axios";
const api = axios.create({
    baseURL: 'https://mern-bookstore-wua5.onrender.com'
})
export default api
