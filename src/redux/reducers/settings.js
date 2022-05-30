/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = {
	idleTime: 5,
	theme: 'light',
	hideMoney: false,
};

const reducer =	 (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_SETTINGS':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
