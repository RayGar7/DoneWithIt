import { create } from 'apisauce';
//what Mosh loves about this library is that the Promise will alwways resolve

const apiClient = create({
    baseURL: 'http://192.168.1.75:9000/api'
});


export default apiClient;
