import axios from 'axios';
// import {API_URL} from './config.js'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function  LogiAdm(email, senha) {
    const r = await api.post('/login/admin',{
        email: email,
        senha: senha
    });
    return r.data
};
