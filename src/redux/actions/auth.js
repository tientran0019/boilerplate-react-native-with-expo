/*--------------------------------------------------------
 * Author Trần Đức Tiến
 * Email ductienas@gmail.com
 * Phone 0972970075
 *
 * LastModified: 2018-01-10 23:15:32
 *-------------------------------------------------------*/

import AuthStorage from 'src/utils/AuthStorage';

import { SINGLE_API, REQUEST_ERROR } from 'src/redux/actions/type';

export const editProfile = (payload, next) => {
	const { id, ...user } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: '/users/' + id,
			params: user,
			opt: { method: 'PATCH' },
			successType: 'EDIT_PROFILE_SUCCESS',
			afterFinishing: next,
		},
	};
};

export function loginRequest(payload, next) {
	return {
		type: 'LOGIN_REQUEST',
		payload,
		next,
	};
}

export function loginGoogle(payload, next) {
	return {
		type: 'LOGIN_GOOGLE',
		payload,
		next,
	};
}

export function loginFacebook(payload, next) {
	return {
		type: 'LOGIN_FACEBOOK',
		payload,
		next,
	};
}

export function signUpRequest(payload, next) {
	return {
		type: 'SIGN_UP_REQUEST',
		payload,
		next,
	};
}

export function logoutRequest(next) {
	return {
		type: 'LOGOUT_REQUEST',
		next,
	};
}

export const getUserAuth = async (payload, next) => {
	const userId = await AuthStorage.userId;

	const filter = {};

	return {
		type: SINGLE_API,
		payload: {
			uri: '/users/' + userId + `?filter=${JSON.stringify(filter)}`,
			successType: 'GET_USER_AUTH_SUCCESS',
			afterFinishing: next,
		},
	};
};

export const resetPassword = (payload, next) => {
	return {
		type: SINGLE_API,
		payload: {
			uri: '/users/reset-password?access_token=' + payload.token,
			params: { newPassword: payload.password },
			opt: { method: 'POST' },
			afterFinishing: next,
		},
	};
};

export const forgotPassword = (payload, next) => {
	return {
		type: SINGLE_API,
		payload: {
			uri: '/users/reset',
			params: { email: payload.email },
			opt: { method: 'POST' },
			afterFinishing: next,
		},
	};
};

export const changePassword = async (payload, next = f => f) => {
	if (await !AuthStorage.loggedIn) {
		if (typeof nextError === 'function') {
			next('Login is required!');
		}
		return {
			type: REQUEST_ERROR,
			payload: 'Login is required!',
		};
	}
	const { oldPassword, newPassword } = payload;
	return {
		type: SINGLE_API,
		payload: {
			uri: '/users/change-password',
			params: { oldPassword, newPassword },
			opt: { method: 'POST' },
			afterFinishing: next,
		},
	};
};
