/*--------------------------------------------------------
 * Author Trần Đức Tiến
 * Email ductienas@gmail.com
 * Phone 0972970075
 *
 * Created: 2019-01-30 15:04:39
 *-------------------------------------------------------*/
import { fromJS, Map } from 'immutable';

export const initialState = fromJS({});

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return fromJS(action.payload);

		case 'LOGIN_FAILED':
			return Map({ error: action.payload.message || action.payload });

		case 'LOGOUT_SUCCESS':
			return fromJS({});

		case 'GET_USER_AUTH_SUCCESS':
			return fromJS(action.payload);

		case 'EDIT_PROFILE_SUCCESS':
			return fromJS(action.payload);

		default:
			return state;
	}
};
