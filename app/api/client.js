import { create } from 'apisauce';
//what Mosh loves about this library is that the Promise will alwways resolve

const apiClient = create({
    baseURL: 'http://192.168.0.14:9000/api'
});


export default apiClient;
