/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:46:54
*------------------------------------------------------- */

import { AsyncStorage } from 'react-native';

const mandatory = () => {
	throw new Error('Missing parameter!');
};

class Storage {
	#name;

	constructor(name = mandatory()) {
		this.#name = name;
	}

	getValue = async (next = f => f) => {
		try {
			const result = await AsyncStorage.getItem(this.#name);
			let value = {};
			try {
				value = JSON.parse(result);
			} catch (er) {
				value = result;
			}

			next(null, value);
			return Promise.resolve(value);
		} catch (error) {
			// Error retrieving data
			next(error);
			return Promise.reject(error);
		}
	}

	setValue = async (value = mandatory(), next = f => f) => {
		try {
			await AsyncStorage.setItem(this.#name, JSON.stringify(value));
			next(null, value);
			return Promise.resolve(value);
		} catch (error) {
			// Error saving data
			next(error);
			return Promise.reject(error);
		}
	}

	destroy = async (next = f => f) => {
		try {
			await AsyncStorage.removeItem(this.#name);
			next(null);
			return Promise.resolve();
		} catch (error) {
			// Error saving data
			next(error);
			return Promise.reject(error);
		}
	}
}

export default Storage;
