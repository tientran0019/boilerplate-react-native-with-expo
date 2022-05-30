/* eslint-disable no-param-reassign */
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
import settings, { initialState as initialSettings } from './settings';

import users, { initialState as initialUsers } from './users';

const extractWhiteList = (initialState, state, wl) => {
	const newData = Object.entries(initialState).reduce((preVal, [key, val]) => {
		if (wl.includes(key)) {
			preVal[key] = state[key];
		} else {
			preVal[key] = val;
		}
		return preVal;
	}, {});

	return newData;
};

export const whitelist = ['settings'];

export const initialState = {
	auth: authInitial,
	loader: initialLoader,
	settings: initialSettings,
	users: initialUsers,
};

const appReducer = combineReducers({
	auth,
	loader,
	settings,
	users,
});

const reducers = (state, action) => {
	return appReducer(action.type === 'LOGOUT_SUCCESS' ? extractWhiteList(initialState, state, whitelist) : state, action);
};

export default reducers;
