/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-01-10 23:16:13
*------------------------------------------------------- */

import { take, call, put, cancel, fork } from 'redux-saga/effects';

import fetchApi from 'src/utils/FetchApi';
import AuthStorage from 'src/utils/AuthStorage';
import navigation from 'src/navigation/NavigationService';

import { REQUEST_ERROR } from 'src/redux/actions/type';

const filter = {};

function* authorize(payload, next = f => f) {
	const response = yield call(fetchApi, {
		uri: `/users/login?include=${JSON.stringify(filter)}`,
		params: payload,
		opt: { method: 'POST' },
		loading: false,
	});

	if (response && !response.error) {
		const data = {
			token: response.id,
			userId: response.userId,
			role: response.user.role,
		};

		yield call(AuthStorage.setValue, data);

		yield put({
			type: 'LOGIN_SUCCESS',
			payload: response.user,
		});

		next(null, response);
	} else {
		yield put({
			type: 'LOGIN_FAILED',
			payload: response.error,
		});
		next(response.error);
	}
}

function* loginFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { payload, next } = yield take('LOGIN_REQUEST');
		const authorizeTask = yield fork(authorize, payload, next);
		const action = yield take(['LOGOUT_REQUEST', 'LOGIN_FAILED', REQUEST_ERROR]);

		if (action.type === 'LOGOUT_REQUEST') {
			yield cancel(authorizeTask);
		}
	}
}

function* loginGoogleFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { payload, next = f => f } = yield take('LOGIN_GOOGLE');

		const response = yield call(fetchApi, {
			uri: `/users/login-google?include=${JSON.stringify(filter)}`,
			params: payload,
			opt: { method: 'POST' },
		});

		if (response && !response.error) {
			const data = {
				token: response.id,
				userId: response.userId,
				role: response.user.role,
			};
			yield call(AuthStorage.setValue, data);

			yield put({
				type: 'LOGIN_SUCCESS',
				payload: response.user,
			});

			next(null, response);
		} else {
			next(response.error);
		}
	}
}

function* loginFacebookFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { payload, next = f => f } = yield take('LOGIN_FACEBOOK');

		const response = yield call(fetchApi, {
			uri: `/users/login-facebook?include=${JSON.stringify(filter)}`,
			params: payload,
			opt: { method: 'POST' },
		});
		if (response && !response.error) {
			const data = {
				token: response.id,
				userId: response.userId,
				role: response.user.role,
			};
			yield call(AuthStorage.setValue, data);

			yield put({
				type: 'LOGIN_SUCCESS',
				payload: response.user,
			});

			next(null, response);
		} else {
			next(response.error);
		}
	}
}

function* logoutFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { next } = yield take('LOGOUT_REQUEST');

		yield call(fetchApi, {
			uri: '/users/logout',
			opt: { method: 'POST' },
		});

		yield call(AuthStorage.destroy);

		yield put({ type: 'LOGOUT_SUCCESS' });

		navigation.navigate('Login');

		if (typeof next === 'function') {
			next();
		}
	}
}

function* signUpFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { payload, next = f => f } = yield take('SIGN_UP_REQUEST');

		const response = yield call(fetchApi, {
			uri: '/users',
			params: payload,
			opt: { method: 'POST' },
			loading: false,
		});

		if (response && !response.error) {
			// const authorizeTask = yield fork(authorize, payload, next, nextErr);
			// const action = yield take(['LOGOUT_REQUEST', 'LOGIN_FAILED', REQUEST_ERROR]);

			// if (action.type === 'LOGOUT_REQUEST') {
			// 	yield cancel(authorizeTask);
			// }
			next(null, response);
		} else {
			next(response.error);
		}
	}
}

export default function* authFlow() {
	yield fork(loginFlow);
	yield fork(loginGoogleFlow);
	yield fork(loginFacebookFlow);
	yield fork(logoutFlow);
	yield fork(signUpFlow);
}
