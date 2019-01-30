/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-02 15:54:24
*------------------------------------------------------- */

import { SINGLE_API } from 'src/redux/actions/type';

export const uploadFiles = (payload, next = f => f, nextError = f => f) => {
	let { files } = payload;

	if (!files || files.length === 0) {
		next([]);
		return {
			type: 'NOT_UPLOAD',
		};
	}

	files = files.filter((file) => {
		return file.uri;
	});

	if (files.length === 0) {
		next([]);
		return {
			type: 'NOT_UPLOAD',
		};
	}

	return {
		type: SINGLE_API,
		payload: {
			uri: '/containers/containers-name/upload',
			params: { files },
			opt: { method: 'POST' },
			uploadFile: true,
			afterSuccess: (res) => {
				const imagesReturn = res.result.files.files.map((img) => {
					return img.providerResponse.location;
				});

				next(imagesReturn);
			},
			afterError: nextError,
		},
	};
};
