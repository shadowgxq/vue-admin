import { getToken } from '@/util/auth';
import axios from 'axios';

const service = axios.create({
	baseURL: '/',
	timeout: 50000,
	headers: {
		'Content-Type': 'application/json',
	},
});

service.interceptors.request.use((config) => {
	if (getToken()) {
		config.headers.Authorization = `Bearer ${getToken()}`;
	}
}, (error) => {

})

export default service;