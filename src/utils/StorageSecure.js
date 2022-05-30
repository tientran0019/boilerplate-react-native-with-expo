/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:46:54
*------------------------------------------------------- */

import * as SecureStore from 'expo-secure-store';

const mandatory = () => {
	throw new Error('Missing parameter!');
};

class StorageSecure {
	#name;

	constructor(name = mandatory()) {
		this.#name = name;
	}

	get value() {
		return (async () => {
			try {
				const result = await SecureStore.getItemAsync(this.#name);
				let value = {};
				try {
					value = JSON.parse(result);
				} catch (er) {
					value = result;
				}

				return Promise.resolve(value);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}

	setValue = async (value = mandatory(), next = f => f) => {
		try {
			await SecureStore.setItemAsync(this.#name, JSON.stringify(value));
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
			await SecureStore.deleteItemAsync(this.#name);
			next(null);
			return Promise.resolve();
		} catch (error) {
			// Error saving data
			next(error);
			return Promise.reject(error);
		}
	}
}

export default StorageSecure;
