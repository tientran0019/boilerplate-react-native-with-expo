/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-08 15:48:40
*------------------------------------------------------- */

const ellipse = (text = '', mark, width = 10) => {
	if (text.length <= width * 2) {
		return text;
	}

	let hiddenText = '...';

	if (mark) {
		const markLength = text.length - (width * 2);

		if (markLength > 0) {
			hiddenText = Array(markLength).fill('x').join('');
		}
	}

	return `${text.slice(0, width)}${hiddenText}${text.slice(-width)}`;
};

export default ellipse;
