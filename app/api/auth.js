import client from './client';

const login = (email, password) => client.post('/auth/token', { email, password});

export default {
    login,
}