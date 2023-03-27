/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 10:33:59
*------------------------------------------------------- */

// import merge from 'lodash/merge';
// import queryString from 'query-string';

import axios from 'axios';

import { Alert } from 'react-native';

import CONSTANTS from 'src/constants/configs';

import AuthStorage from './auth-storage';

const mandatory = () => {
	return Promise.reject(new Error('Fetch API Missing parameter!'));
};

const { API_URL } = CONSTANTS;

const axiosInstance = axios.create({
	baseURL: API_URL,
	timeout: 300000,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.defaults.timeout = 300000;

export const setupInterceptors = (store) => {
	axiosInstance.interceptors.request.use(
		async (config) => {
			// set token
			const accessToken = await AuthStorage.accessToken;

			if (accessToken) {
				// eslint-disable-next-line no-param-reassign
				config.headers.Authorization = 'Bearer ' + accessToken;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		},
	);

	axiosInstance.interceptors.response.use(
		(res) => {
			return res;
		},
		async (err) => {
			const originalConfig = err.config || {};
			const refreshToken = await AuthStorage.refreshToken;
			const value = await AuthStorage.value;

			if (originalConfig?.url !== '/users/logout' && err.response && refreshToken) {
				// Access Token was expired
				if (err.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true;

					try {
						const rs = await axios.post(API_URL + '/users/refresh-token', {
							refreshToken,
							timeout: 300000,
						});

						const { accessToken } = rs.data;

						await AuthStorage.setValue({
							...value,
							accessToken,
						});

						return axiosInstance(originalConfig);
					} catch (_error) {
						const { response } = _error;

						if (response?.data?.status === 401 || response?.data?.code === 'INVALID_REFRESH_TOKEN') {
							navigation.navigate('Logout');
						}

						return Promise.reject(response?.data || _error);
					}
				}
			}

			return Promise.reject(err?.response?.data || err);
		},
	);
};

const fetchApi = async ({ url, options = { headers: {}, method: 'GET' }, payload = {}, dispatch = f => f, silence = false } = mandatory(), cb = f => f) => {
	const { method = 'GET', headers = {} } = options;

	try {
		if (process.env.APP_ENV === 'development') {
			console.log('------');
			console.log('Call API: url, options, payload', url, options, payload);
		}

		if (headers && Object.keys(headers).length > 0) {
			axiosInstance.defaults.headers = {
				...axiosInstance.defaults.headers,
				...headers,
			};
		} else {
			axiosInstance.defaults.headers = {
				'Content-Type': 'application/json',
			};
		}

		const response = await axiosInstance?.[method?.toLowerCase() || 'get']?.(url, payload);

		if (process.env.APP_ENV === 'development') {
			console.log('------');
		}

		if (response.status === 204 || response.statusText === 'No Content') {
			cb(null, {});
			return {};
		}

		if (response.status !== 200) {
			throw response;
		}

		const { data = {} } = response;

		cb(null, data);
		return data;
	} catch (error) {
		if (process.env.APP_ENV === 'development') {
			console.log('Call API Error: ', error);
		}

		if (!silence) {
			setTimeout(() => {
				Alert.alert(
					'Oops!',
					typeof error === 'string' ? error : (error?.message || 'Server is not working properly! Please try again later.'),
					[
						{
							text: 'Ok',
							onPress: async () => {
								if (err.status === 403 || err.status === 401) {
									const loggedIn = await AuthStorage.loggedIn;
									// if (loggedIn) {
									// 	navigation.navigate('Logout');
									// } else {
									// 	navigation.reset({
									// 		index: 0,
									// 		routes: [{ name: 'Welcome' }],
									// 	});
									// }
								}
							},
						},
					],
				);
			}, 200);
		}

		cb(error);
		throw error;
	}
};

export default fetchApi;
