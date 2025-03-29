import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://192.168.1.75:9000/api',
    timeout: 20000
});


export default apiClient;
