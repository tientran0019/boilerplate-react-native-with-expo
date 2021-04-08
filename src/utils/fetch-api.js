/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:51:21
*------------------------------------------------------- */
import merge from 'lodash/merge';
import queryString from 'query-string';

import { Alert } from 'react-native';

import CONSTANTS from 'src/constants/configs';

import navigation from 'src/navigation/navigation';

import AuthStorage from './auth-storage';

const mandatory = () => {
	return Promise.reject(new Error('Fetch API Missing parameter!'));
};

const { API_URL } = CONSTANTS;

export default async ({ url, options, payload = {} } = mandatory(), cb = f => f) => {
	try {
		const defaultOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		};

		const opts = merge(defaultOptions, options);

		// set token
		if (await AuthStorage.token) {
			opts.headers.Authorization = 'Bearer ' + (await AuthStorage.token);
		}

		let uri = API_URL + url;

		if (payload && Object.keys(payload).length > 0) {
			if (opts && opts.method === 'GET') {
				uri = queryString.stringifyUrl({ url: uri, query: payload });
			} else {
				if (opts.headers['Content-Type'] === 'multipart/form-data') {
					delete opts.headers['Content-Type'];

					const formData = new FormData();

					Object.entries(payload).forEach(([key, val]) => {
						if (val) {
							if (key === 'pdfFiles' || key === 'images' || key === 'newImages' || key === 'newPdfFiles' || key === 'mediaFiles' || key === 'newMediaFiles') {
								val.forEach((file) => {
									formData.append(key, { uri: file.uri, name: file.name, type: 'multipart/form-data' });
								});
							} else if (key === 'deleteImages' || key === 'deletePdfFiles' || key === 'deleteMediaFiles') {
								val.forEach((file) => {
									formData.append(key, file);
								});
							} else if (key === 'profilePicture') {
								formData.append(key, { uri: val.uri, name: val.name, type: 'multipart/form-data' });
							} else {
								formData.append(key, val);
							}
						}
					});

					opts.body = formData;
				} else {
					opts.body = JSON.stringify(payload);
				}
			}
		}

		if (__DEV__) {
			console.log('------');
			console.log('Call API: url, options, payload', uri, opts, payload);
		}

		const response = await fetch(uri, opts);

		if (__DEV__) {
			console.log('------');
		}

		if (response.ok && (response.status === 204 || response.statusText === 'No Content')) {
			cb(null, {});
			return {};
		}
		const data = await response.json();

		if (response.status !== 200) {
			throw data;
		}

		cb(null, data);
		return data;
	} catch (err) {
		if (__DEV__) {
			console.log('Call API Error: ', err);
		}

		setTimeout(() => {
			Alert.alert(
				'Oops!',
				err.errors?.[0]?.message || err.message || err.toString(),
				[
					{
						text: 'Ok',
						onPress: async () => {
							if (err.status === 403 || err.status === 401) {
								const loggedIn = await AuthStorage.loggedIn;
								if (loggedIn) {
									navigation.navigate('Logout');
								} else {
									navigation.navigate('Intro');
								}
							}
						},
					},
				],
			);
		}, 200);

		cb(err);
		throw err;
	}
};
