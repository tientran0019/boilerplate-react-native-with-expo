/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2017-12-15 23:36:23
*------------------------------------------------------- */

import { AsyncStorage } from 'react-native';

const mandatory = () => {
	throw new Error('Missing parameter!');
};

class Storage {
	#name;

	value;

	constructor(name = mandatory()) {
		this.#name = name;
	}

	bootstrapAsync = async (next = f => f) => {
		try {
			const result = await AsyncStorage.getItem(this.#name);
			let value = {};
			try {
				value = JSON.parse(result);
			} catch (er) {
				value = result;
			}
			next();
			this.value = value;
		} catch (error) {
			// Error retrieving data
		}
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
			next();
			this.value = value;
			return value;
		} catch (error) {
			// Error retrieving data
		}
	}

	setValue = async (value = mandatory(), next) => {
		await AsyncStorage.setItem(this.#name, JSON.stringify(value), (err) => {
			if (err) {
				console.log('err', err);
				next(err);
			} else {
				this.value = value;
				if (next && typeof next === 'function') {
					next();
				}
			}
		});
	}

	destroy = async (next) => {
		await AsyncStorage.removeItem(this.#name, (err) => {
			if (err) {
				console.log('err', err);
				next(err);
			} else {
				this.value = {};
				if (next && typeof next === 'function') {
					next();
				}
			}
		});
	}
}

export default Storage;
