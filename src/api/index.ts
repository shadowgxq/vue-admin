import { getToken } from '@/util';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Create a function to handle the request
function service<T>(config: AxiosRequestConfig): Promise<T> {
	const instance = axios.create({
		baseURL: '/basic-api',
		timeout: 50000,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	instance.interceptors.request.use((config) => {
		const token = getToken();
		if (token) {
			config.headers.authorization = `${token}`;
		}
		return config;
	});

	// Use generics to directly specify the response data type
	return instance(config)
		.then((response: AxiosResponse<T>) => {
			return response.data;
		})
		.catch((error: AxiosError) => {
			throw error;
		});
}

export default service;
