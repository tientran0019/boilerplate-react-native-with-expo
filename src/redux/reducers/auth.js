/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-04-08 20:39:58
*------------------------------------------------------- */

export const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return action?.payload || {};

		case 'LOGIN_FAILED':
			return { error: action?.payload?.message || action?.payload };

		case 'LOGOUT_SUCCESS':
			return {};

		case 'GET_USER_AUTH_SUCCESS':
		case 'EDIT_PROFILE_SUCCESS':
		case 'SIGN_UP_SUCCESS':
			return action.payload;

		default:
			return state;
	}
};

export default reducer;
