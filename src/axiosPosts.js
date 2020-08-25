import axios from "axios";

const axiosPosts = axios.create({
    baseURL: 'https://blog-domino.firebaseio.com/'
});

export default axiosPosts;