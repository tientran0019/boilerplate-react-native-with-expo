/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-01-10 23:14:00
*------------------------------------------------------- */

import { takeEvery, call, put } from 'redux-saga/effects';

import fetchApi from 'src/utils/FetchApi';

import { SINGLE_API } from 'src/redux/actions/type';

function* callApi(action) {
	if (action.type === SINGLE_API) {
		/* payload sample
		{
			uri: ,
			params: ,
			opt: ,
			loading: ,
			uploadFile: ,
			beforeCallType: 'CLEAR_CACHE_FEEDS_FB',
			afterCallType: 'CLEAR_CACHE_FEEDS_FB',
			successType: 'GET_CART_LIST_SUCCESS',
			errorType: 'GET_CART_LIST_SUCCESS',
			afterFinishing: next,
		}
		*/

		const { successType, beforeCallType, afterCallType, afterFinishing = f => f, errorType, ...rest } = action.payload;

		if (beforeCallType) {
			yield put({ type: beforeCallType });
		}

		const response = yield call(fetchApi, rest);

		if (afterCallType) {
			yield put({ type: afterCallType });
		}

		if (response && !response.error) {
			if (successType) {
				yield put({ type: successType, payload: response });
			}

			if (typeof afterSuccess === 'function') {
				afterFinishing(null, response);
			}
		} else {
			if (errorType) {
				yield put({ type: errorType, payload: response.error });
			}

			if (typeof afterError === 'function') {
				afterFinishing(response.error);
			}
		}
	}
}

export default function* () {
	yield takeEvery('*', callApi);
}
