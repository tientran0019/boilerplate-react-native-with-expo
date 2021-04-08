/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-18 23:24:01
*------------------------------------------------------- */

export default (options = [], val) => {
	if (options.length === 0 || !val) {
		return '';
	}

	const option = options.find(el => {
		return el.value === val.trim();
	});

	return option ? option.label : '';
};
