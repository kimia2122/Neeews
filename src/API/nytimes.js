import axios from 'axios';

export default axios.create({
    baseURL:'https://newsapi.org/v2',
    params: {
        apiKey : 'bf89cd3720ed42779b7794acc1f2d607'
    }
});