import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b7d21.firebaseio.com/'
});

export default instance;