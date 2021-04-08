/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-01-07 19:09:21
*------------------------------------------------------- */

import { combineReducers } from 'redux';

import auth, { initialState as authInitial } from './auth';
import loader, { initialState as initialLoader } from './loader';

export const initialState = {
	auth: authInitial,
	loader: initialLoader,
};

const appReducer = combineReducers({
	auth,
	loader,
});

export default (state, action) => {
	return appReducer(action.type === 'LOGOUT_SUCCESS' ? initialState : state, action);
};
