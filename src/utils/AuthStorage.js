/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2017-12-15 23:35:57
*------------------------------------------------------- */
import Storage from './Storage';

class AuthStorage extends Storage {
	get loggedIn() {
		return (async () => {
			try {
				const value = await this.getValue();
				return Promise.resolve(!!value && !!value.token);
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
