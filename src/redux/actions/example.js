/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-06 01:03:01
*------------------------------------------------------- */

import { SINGLE_API } from 'src/redux/actions/type';
// import AuthStorage from 'src/utils/AuthStorage';

import { applyURIFilter } from 'src/utils';

export const MODEL_NAME = 'EXAMPLE';
export const MODEL_PLURAL = 'examples';

export const create = (payload, next, nextError) => {
	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}`,
			params: payload,
			opt: { method: 'POST' },
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const update = (payload, next, nextError) => {
	const { id, ...answer } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}/${id}`,
			params: answer,
			opt: { method: 'PATCH' },
			successType: 'UPDATE_' + MODEL_NAME + '_SUCCESS',
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const getOne = (payload = {}, next, nextError) => {
	const { id, filter } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}/${id}${applyURIFilter(filter)}`,
			beforeCallType: 'GET_' + MODEL_NAME + '_DATA_REQUEST',
			successType: 'GET_' + MODEL_NAME + '_DATA_SUCCESS',
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const getList = (payload = {}, next, nextError) => {
	const { filter, firstLoad } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}${applyURIFilter(filter)}`,
			beforeCallType: firstLoad ? 'GET_' + MODEL_NAME + '_LIST_REQUEST' : '',
			successType: 'GET_' + MODEL_NAME + '_LIST_SUCCESS',
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const remove = (payload, next) => {
	const { id } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}/${id}`,
			params: id,
			opt: { method: 'DELETE' },
			successType: 'DELETE_' + MODEL_NAME + '_SUCCESS',
			afterSuccess: next,
		},
	};
};
