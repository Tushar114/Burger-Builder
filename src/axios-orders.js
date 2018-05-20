import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-eeb1e.firebaseio.com/'
});

export default instance;