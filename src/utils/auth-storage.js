/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:48:10
*------------------------------------------------------- */

import Storage from './Storage';

class AuthStorage extends Storage {
	get loggedIn() {
		return (async () => {
			try {
				const value = await this.getValue();
				return Promise.resolve(!!value && !!value.token && !!value.userId);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}

	get token() {
		return (async () => {
			try {
				const value = await this.getValue();
				return Promise.resolve(!!value && value.token);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}

	get userId() {
		return (async () => {
			try {
				const value = await this.getValue();
				return Promise.resolve(!!value && value.userId);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}
}

export default new AuthStorage('AUTH');
