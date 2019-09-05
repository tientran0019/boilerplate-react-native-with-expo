/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 15:45:33
*------------------------------------------------------- */
import { REQUEST_ERROR } from 'src/redux/actions/type';
import { fromJS } from 'immutable';

import { Alert } from 'react-native';

export const initialState = fromJS({
	sending: false,
});

export default function (state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_LOADING':
			return fromJS({ sending: !state.toJS().sending });
		case 'START_LOADING':
			return fromJS({ sending: true });

		case 'STOP_LOADING':
			return fromJS({ sending: false });
		case 'LOGIN_FAILED':
		case REQUEST_ERROR: {
			Alert.alert(
				'Error',
				action.payload.message || action.payload,
			);

			return fromJS({ sending: false, error: action.payload });
		}
		default:
			return state;
	}
}
