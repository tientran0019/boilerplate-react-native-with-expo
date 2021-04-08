/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-20 20:14:22
*------------------------------------------------------- */

export default (url) => {
	if (!url || (typeof url !== 'string')) {
		return false;
	}

	return !!url.match(/\w+\.(pdf)$/gi);
};
