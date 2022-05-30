/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-08-07 21:16:00
*------------------------------------------------------- */

const getFileType = (file) => {
	if (!file || !file.type) {
		return 'other';
	}
	if (file.type?.match('image.*')) {
		return 'image';
	}

	if (file.type?.match('video.*')) {
		return 'video';
	}

	if (file.type?.match('audio.*')) {
		return 'audio';
	}

	return 'other';
};

export default getFileType;
