/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:01:55
*------------------------------------------------------- */

import Storage from './Storage';

class GuideStorage extends Storage {
	get isFinished() {
		return (async () => {
			try {
				const value = await this.value;
				return Promise.resolve(!!value && !!value.finished);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}

	setIsFinished = async (value, next = f => f) => {
		try {
			const existVal = await this.value;

			const newVal = await this.setValue({
				...existVal,
				finished: value,
			});

			next(null, newVal);
			return Promise.resolve(newVal);
		} catch (error) {
			// Error saving data
			next(error);
			return Promise.reject(error);
		}
	}
}

export default new GuideStorage('GUIDE');
