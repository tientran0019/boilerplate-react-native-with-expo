/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:31:26
*------------------------------------------------------- */

export function updateSettings(payload = {}) {
	return {
		type: 'UPDATE_SETTINGS',
		payload,
	};
}
