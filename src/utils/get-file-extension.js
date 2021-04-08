/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-10-23 00:47:56
*------------------------------------------------------- */

export default (filename) => {
	if (!filename) {
		return undefined;
	}
	return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
};
